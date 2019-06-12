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
import browserSync from "browser-sync";
import zip from "gulp-zip";
import info from "./package.json";
import rename from "gulp-rename";
import resolve from "rollup-plugin-node-resolve";
import rollup from "rollup-stream";


const PRODUCTION = yargs.argv.prod;

const server = browserSync.create();
export const serve = done => {
  server.init({
    proxy: "http://dev.goshawk-starter.com" // put your local website link here
  });
  done();
};
export const reload = done => {
  server.reload();
  done();
};

export const styles = () => {
  return src(['src/less/style.less', 'src/less/editor-style.less'])
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(less())
    .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility: 'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest('./'))
    .pipe(server.stream());
}

export const watchForChanges = () => {
  watch('src/less/**/*.less', styles);
  watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', series(images, reload));
  watch(['src/**/*','!src/{images,js,less}','!src/{images/js/less}/**/*'], series(copy, reload));
  watch('src/js/**/*.js', series(scripts, reload));
  watch('**/*.php', reload);
}

export const images = () => {
  return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('./dist/images'));
}

export const icons = () => {
  return src('src/js/icons-import.js')
    .pipe(rollup({
      format: 'es',
      plugins: [
        // this is needed for helping Rollup to resolve node paths
        resolve({
          // some package.json files have a `browser` field which
          // specifies alternative files to load for people bundling
          // for the browser. If that's you, use this option, otherwise
          // pkg.browser will be ignored
          browser: true,  // Default: false
        })
      ]
    }))
    .pipe(rename('tree-shaken-icons.js'))
    .pipe(dest('src/js'))
}

export const scripts = () => {
  return src('src/js/*.js')
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
    .pipe(dest('./dist/js'));
}

export const copy = () => {
  return src(['src/**/*','!src/{images,js,less}','!src/{images,js,less}/**/*'])
    .pipe(dest('dist'));
}

export const clean = () => {
  return del(['dist']);
}

export const compress = () => {
  return src([
    "**/*",
    "!node_modules{,/**}",
    "!src{,/**}",
    "!.babelrc",
    "!.gitignore",
    "!gulpfile.babel.js",
    "!package.json",
    "!package-lock.json",
  ])
  .pipe(
    gulpif(
      file => file.relative.split(".").pop() !== "zip",
      replace('_themename', info.name)
    )
  )
  .pipe(zip(`${info.name}.zip`))
  .pipe(dest('bundled'));
}

export const dev = series(clean, parallel(styles, images, scripts, copy), serve, watchForChanges);
export const build = series(clean, parallel(styles, images, copy, scripts), compress);
export default dev;