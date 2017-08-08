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
// var pug          = require("gulp-pug");
// var browserSync  = require('browser-sync').create();
// var gulpif       = require("gulp-if");

// Imports
// --------------------------
var pkg          = require('./package.json');


// LESS Compilation
// ---------------------------------------
gulp.task("less", function() {
  var source = gulp.src("assets/less/global.less")
    .pipe(sourcemaps.init())          // Initialize sourcemaps before modifying
    .pipe(less());                    // The base LESS compilation

  var stylesPipe1 = source.pipe(clone()) // Create non-minified sourcemap
    .pipe(sourcemaps.write("./maps"))    // Write the compiled LESS to a CSS file
    .pipe(gulp.dest("assets/css"));
    // .pipe(browserSync.reload({
    //   stream: true
    // }));

  if (argv.production) {
    var stylesPipe2 = source.pipe(clone()) // Create minified + sourcemap
      .pipe( cleanCSS({ compatibility: "ie10" }) )
      .pipe( rename({suffix: ".min"}) )
      .pipe( sourcemaps.write("./maps"))
      .pipe( gulp.dest("assets/css"));

    return merge(stylesPipe1, stylesPipe2);
  }

  return stylesPipe1;
});


// JS Concatenate & Minify
// ---------------------------------------
gulp.task("js", function() {
  var srcFiles = [
    // Bootstrap _________
    "assets/third-party/perch/js/bootstrap-transition.js",
    "assets/third-party/perch/js/bootstrap-alert.js",
    "assets/third-party/perch/js/bootstrap-modal.js",
    // "assets/third-party/perch/js/bootstrap-collapse.js",
    // "assets/third-party/perch/js/bootstrap-tab.js",

    // Other Third-party _________
    "node_modules/mousetrap/mousetrap.js",
    "node_modules/parsleyjs/src/extra/validator/luhn.js",
    "node_modules/parsleyjs/dist/parsley.js",
    "node_modules/lazysizes/lazysizes.js",
    // "node_modules/flickity/dist/flickity.pkgd.js",
    // "node_modules/smooth-scroll/dist/js/smooth-scroll.js",
    // "node_modules/gumshoe/dist/js/gumshoe.js",

    // Homegrown _________
    "assets/third-party/perch/js/perch-scripts.js",
    "assets/third-party/perch/js/library/dispatcher.js",
    // "assets/third-party/perch/js/library/wordpress/wp-hide-show-comments.js",

    // Homegrown Ecommerce _________
    // "assets/third-party/perch/js/library/ecommerce/shipping-same-as-billing.js",
    // "assets/third-party/perch/js/library/ecommerce/cart-quantity-updater.js",
  ];
  // gulp.src(config.src.js + "/app/**/*.js").pipe(gulp.dest(config.dest.js + "/app"));

  var source = gulp.src(srcFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('global.js'));

  var sourceCopy1 = source.pipe(clone())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("assets/js"));

  if (argv.production) {
    var sourceCopy2 = source.pipe(clone())
      .pipe( uglify() )
      .pipe( rename({suffix: ".min"}) )
      .pipe( sourcemaps.write("./maps") )
      .pipe( gulp.dest("assets/js") );

    return merge(sourceCopy1, sourceCopy2);
  }
  return sourceCopy1;
});


// Copy Tasks
// ---------------------------------------
gulp.task('copy', [
  'copy:jquery',
  'copy:autotrack'
]);

gulp.task('copy:jquery', function() {
  gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    // .pipe( rename(`jquery-${pkg.dependencies.jquery}.min.js`) )
    .pipe(gulp.dest('assets/js'));
});

gulp.task('copy:autotrack', function() {
  gulp.src(['node_modules/autotrack/autotrack.js'])
    .pipe(gulp.dest('assets/js'));
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
//   })
// })


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
gulp.task("watch", ["default"/*, "browserSync"*/], function () {
  gulp.watch("node_modules/jquery/**/*.js", ["copy:jquery"]);
  gulp.watch("node_modules/autotrack/**/*.js", ["copy:autotrack"]);
  gulp.watch("assets/**/*.less", ["less"]);
  gulp.watch("assets/**/*.js", ["js"]);
});
