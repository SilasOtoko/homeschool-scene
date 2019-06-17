const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

mix.js('src/js/bundle.js', 'dist/js/bundle.js')
   .less('src/less/style.less', 'style.css')
   .sourceMaps()
   .copyDirectory('src/images', 'dist/images')
   .options({
     processCssUrls: false,
   });


mix.browserSync({
  proxy: 'dev.goshawk-starter.com',
  injectChanges: true,
  files: [
    'src/{*,**/*}.less',
    'src/js/{*,**/*}.js',
    '{*,**/*}.php'
  ],
});

mix.webpackConfig({
  devtool: "inline-source-map"
});