const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

mix.js('src/js/bundle.js', 'dist/js/bundle.js')
   .less('src/less/style.less', 'style.css')
   .copyDirectory('src/images', 'dist/images')
   .options({
     processCssUrls: false,
   })
   .browserSync({
    proxy: 'dev.goshawk-starter.com',
    files: [
      'src/less/style.less',
      'src/js/bundle.js'
    ]
  });