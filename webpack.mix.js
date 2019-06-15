const mix = require('laravel-mix');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');

mix.js('src/js/bundle.js', 'dist/js/bundle.js')
   .less('src/less/style.less', 'style.css')
   .copyDirectory('src/images', 'dist/images')
   .options({
     processCssUrls: false,
   });