const mix = require('laravel-mix');

mix.js('src/js/bundle.js', 'dist/js/bundle.js')
   .less('src/less/style.less', 'style.css')
   .less('src/less/editor-style.less', 'editor-style.css')
   .sourceMaps()
   .copyDirectory('src/images', 'dist/images')
   .options({
     processCssUrls: false,
   });

mix.webpackConfig({
  devtool: "inline-source-map"
});