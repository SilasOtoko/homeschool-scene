import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import less from 'gulp-less';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import merge2 from 'merge2';


const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return merge2(
    src('src/less/style.less'),
    src('src/less/editor-style.less')
  )
  .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
  .pipe(less())
  .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
  .pipe(gulpif(PRODUCTION, cleanCss({compatibility: 'ie8'})))
  .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
  .pipe(dest('./'))
}

export const watchForChanges = () => {
  watch('src/less/**/*.less', styles);
  watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', images);
  watch(['src/**/*','!src/{images,js,less}','!src/{images/js/less}/**/*']);
  watch('src/js/**/*.js', scripts);
}

export const images = () => {
  return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('./images'));
}

export const scripts = () => {
  return src('src/js/bundle.js')
  .pipe(webpack({
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: []
            }
          }
        }
      ]
    },
    mode: PRODUCTION ? 'production' : 'development',
    devtool: !PRODUCTION ? 'inline-source-map' : false,
    output: {
      filename: 'bundle.js'
    },
    externals: {
      jquery: 'jQuery'
    },
  }))
  .pipe(dest('./js'));
}

export const dev = series(parallel(styles, images, scripts), watchForChanges);
export const build = series(parallel(styles, images, scripts));
export default dev;