//
// Birdpress Sample Gulpfile
// --------------------------------------------------


// Variables
// ---------------------------------------
var gulp         = require("gulp");
var argv         = require("yargs").argv;
var merge        = require("merge-stream");
var cleanCSS     = require("gulp-clean-css");
var clone        = require("gulp-clone");
var concat       = require("gulp-concat");
var less         = require("gulp-less");
var rename       = require("gulp-rename");
var sourcemaps   = require("gulp-sourcemaps");
var uglify       = require("gulp-uglify");
// var browserSync  = require('browser-sync').create();
// var gulpif       = require("gulp-if");


// Paths
// --------------------------
var paths = {
  npm:       "node_modules",
  perch:     "assets/third-party/perch",

  srcAssets: "assets",
  srcLESS:   "assets/less",
  srcJS:     "assets/js",

  distCSS:   "assets/css",
  distJS:    "assets/js"
};


// Imports
// --------------------------
var pkg          = require('./package.json');


// Font Awesome 5
// --------------------------
// import fontawesome from paths.npm+'/@fortawesome/fontawesome';
// import { faFacebook } from paths.npm+'/@fortawesome/fontawesome-free-brands'
// var faUser = require(paths.npm+'/@fortawesome/fontawesome-pro-solid/faAddressBook');


// LESS Compilation
// ---------------------------------------
gulp.task("less", function() {
  var source = gulp.src(paths.srcLESS+"/global.less")
    .pipe(sourcemaps.init())          // Initialize sourcemaps before modifying
    .pipe(less());                    // The base LESS compilation

  var stylesPipe1 = source.pipe(clone()) // Create non-minified sourcemap
    .pipe(sourcemaps.write("./maps"))    // Write the compiled LESS to a CSS file
    .pipe(gulp.dest(paths.distCSS));
    // .pipe(browserSync.reload({
    //   stream: true
    // }));

  if (argv.production) {
    var stylesPipe2 = source.pipe(clone()) // Create minified + sourcemap
      .pipe( cleanCSS({ compatibility: "ie10" }) )
      .pipe( rename({suffix: ".min"}) )
      .pipe( sourcemaps.write("./maps"))
      .pipe( gulp.dest(paths.distCSS));

    return merge(stylesPipe1, stylesPipe2);
  }

  return stylesPipe1;
});


// JS Concatenate & Minify
// ---------------------------------------
gulp.task("js", function() {
  // A list of all source files to be used in the final site (for development-only JS files, see the devOnlySrcFiles array below)
  var srcFiles = [
    // File Header Comment & Compilation Warning _________
    paths.srcJS+"/header-comment.js",

    // Bootstrap _________
    paths.perch+"/js/library/bootstrap-plugins/bootstrap-transition.js",
    paths.perch+"/js/library/bootstrap-plugins/bootstrap-alert.js",
    paths.perch+"/js/library/bootstrap-plugins/bootstrap-modal.js",
    // paths.perch+"/js/library/bootstrap-plugins/bootstrap-collapse.js",
    // paths.perch+"/js/library/bootstrap-plugins/bootstrap-tab.js",

    // Other Third-party _________
    paths.npm+"/mousetrap/mousetrap.js",
    paths.npm+"/parsleyjs/src/extra/validator/luhn.js",
    paths.npm+"/parsleyjs/dist/parsley.js",
    paths.npm+"/lazysizes/lazysizes.js",
    // paths.npm+"/flickity/dist/flickity.pkgd.js",
    // paths.npm+"/smooth-scroll/dist/js/smooth-scroll.js",
    // paths.npm+"/gumshoe/dist/js/gumshoe.js",
    // paths.npm+"/prismjs/prism.js",
    // paths.npm+"/prismjs/components/prism-less.js",

    // Homegrown _________
    paths.perch+"/js/perch-core-scripts.js",
    paths.perch+"/js/library/dispatcher.js",
    paths.perch+"/js/library/navigation-system.js",

    // Nav link opening methods — choose one of these at most.
    paths.perch+"/js/library/child-nav-open-with-parent-click.js",
    // paths.perch+"/js/library/child-nav-open-with-generated-button.js",

    paths.perch+"/js/library/hiding-sticky-nav.js",
    paths.perch+"/js/library/modal-search-system.js",
    paths.perch+"/js/library/mousetrap-keyboard-shortcuts.js",
    // paths.perch+"/js/library/wordpress/wp-hide-show-comments.js",

    // Homegrown Ecommerce _________
    // paths.perch+"/js/library/ecommerce/product-thumbnails.js",
    // paths.perch+"/js/library/ecommerce/billing-same-as-shipping.js",
    // paths.perch+"/js/library/ecommerce/cart-quantity-updater.js",
  ];
  // A list of all source files to be used in the development process (for final site JS files, see the srcFiles array above)
  var devOnlySrcFiles = [
    paths.npm+"/holderjs/holder.js",
  ];

  // The "pure" source of files intended to be used on the final, live site
  var source = gulp.src(srcFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('global.js'));

  // Create a separate devSource which concatenates the development only source files
  var devSource = gulp.src(srcFiles.concat(devOnlySrcFiles))
    .pipe(sourcemaps.init())
    .pipe(concat('global.js'));

  // For the non-minified global.js file
  var sourceDevelopment = devSource.pipe(clone())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(paths.distJS));

  // The minified global.min.js file.
  // When the "--production" argument is given, this refers to the pure source (which omits developement only source files)
  if (argv.production) {
    var sourceProduction = source.pipe(clone())
      .pipe( uglify() )
      .pipe( rename({suffix: ".min"}) )
      .pipe( sourcemaps.write("./maps") )
      .pipe( gulp.dest(paths.distJS) );

    return merge(sourceDevelopment, sourceProduction);
  }
  return sourceDevelopment;
});


// Copy Tasks
// ---------------------------------------
gulp.task('copy', [
  'copy:jquery',
  'copy:autotrack'
]);

gulp.task('copy:jquery', function() {
  gulp.src([paths.npm+'/jquery/dist/jquery.min.js'])
    // .pipe( rename(`jquery-${pkg.dependencies.jquery}.min.js`) )
    .pipe(gulp.dest(paths.distJS));
});

gulp.task('copy:autotrack', function() {
  gulp.src([paths.npm+'/autotrack/autotrack.js'])
    .pipe(gulp.dest(paths.distJS));
});


// Browser Sync
// ---------------------------------------
// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'compiled'
//     },
//     browser: "google chrome canary",
//     // https: {
//     //     key: "path-to-custom.key",
//     //     cert: "path-to-custom.crt"
//     // },
//     // open: "ui",
//   });
// });


// Default Tasks
// ---------------------------------------

// gulp
// --------------------------
gulp.task( "default", [
  "less",
  "js",
  "copy"
]);

// gulp watch
// --------------------------
gulp.task("watch", ["default", /*"browserSync"*/], function () {
  gulp.watch(paths.npm+"/jquery/**/*.js", ["copy:jquery"]);
  gulp.watch(paths.npm+"/autotrack/**/*.js", ["copy:autotrack"]);
  gulp.watch(paths.srcAssets+"/**/*.less", ["less"]);
  gulp.watch(paths.srcAssets+"/**/*.js", ["js"]);
});
