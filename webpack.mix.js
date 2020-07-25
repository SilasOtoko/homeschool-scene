const mix = require('laravel-mix');

mix.setPublicPath('.');

mix.js('src/js/bundle.js', 'dist/js/bundle.js')
   .less('src/less/style.less', 'style.css')
   .less('src/less/editor-style.less', 'editor-style.css')
   .copyDirectory('src/images', 'dist/images')
   .options({
     processCssUrls: false,
   });

if (mix.inProduction()) {
    mix.version();
} else {
    mix
        .webpackConfig({
          devtool: "inline-source-map"
        })
        .sourceMaps();
}