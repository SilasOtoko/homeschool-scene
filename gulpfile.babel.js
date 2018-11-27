//
// Birdpress Sample Gulpfile
// --------------------------------------------------


// Variables
// ---------------------------------------
var gulp         = require("gulp");
var babel        = require("gulp-babel");
var argv         = require("yargs").argv;
var merge        = require("merge-stream");
var cleanCSS     = require("gulp-clean-css");
var clone        = require("gulp-clone");
var concat       = require("gulp-concat");
var less         = require("gulp-less");
var rename       = require("gulp-rename");
var resolve      = require("rollup-plugin-node-resolve");
var rollup       = require("rollup-stream");
var sourcemaps   = require("gulp-sourcemaps");
var uglify       = require("gulp-uglify");
var source       = require("vinyl-source-stream");
// var browserSync  = require('browser-sync').create();
// var gulpif       = require("gulp-if");


// Paths
// --------------------------
var paths = {
  npm:       "node_modules/",

  // If changing the Perch location, make sure to also update global.less
  // Perch via NPM:
  perch:     "node_modules/@rarebirdinc/perch/",
  // Perch via Git or manual install:
  // perch:     "assets/third-party/perch/",

  srcAssets: "assets/",
  srcLESS:   "assets/less/",
  srcJS:     "assets/js/",

  distCSS:   "assets/css/",
  distJS:    "assets/js/",
  distIcons: "assets/icons/"
};


// LESS Compilation
// ---------------------------------------
gulp.task("less", function() {
  var source = gulp.src(paths.srcLESS+"global.less")
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

// Critical LESS => CSS
// --------------------------
// gulp.task("critical", function() {
//   var source = gulp.src(paths.srcLESS+"critical.less")
//     .pipe( less() )
//     .pipe( gulp.dest(paths.distCSS) )
//     .pipe( cleanCSS({ compatibility: "ie11" }) )
//     .pipe( rename({suffix: ".min"}) )
//     .pipe( gulp.dest(paths.distCSS));
// });


// JS
// ---------------------------------------

// Babel JS task
// --------------------------
// To use, uncomment the following three items:
//   1. the "babeljs" task directly below
//   2. the running of ['babeljs'] alongside the "js" task below
//   3. the gulp-babel-transpiled-scripts.js file as a source JS file below
// --------------------------
// gulp.task("babeljs", () => {
//   // A list of all source JS files to be used on the site that specifically require being transpiled to ES5 (aka run through Babel) for cross-browser support
//   var filesNeedingBabel = [
//     paths.distJS+"sample-es2015-scripts.js",
//   ];

//   // Generates a transpiled JS file to be grouped in to the default JS task source files
//   return gulp.src(filesNeedingBabel)
//     .pipe(babel())
//     .pipe(concat('gulp-babel-transpiled-scripts.js'))
//     .pipe(gulp.dest(paths.distJS));
// });


// Default JS task
// --------------------------
gulp.task("js", /*['babeljs'],*/ () => {
  // A list of all source files to be used in the final site (for development-only JS files, see the devOnlySrcFiles array below)
  var srcFiles = [
    // File Header Comment & Compilation Warning _________
    paths.srcJS+"header-comment.js",

    // Babel Polyfill for certain ES6 features (required for Object.assign errors in IE)
    // DO NOT USE unless if you MUST. This is one fat library.
    // This file MUST be at the top of the scripts if used
    // paths.npm+"/babel-polyfill/dist/polyfill.js",

    // Babel Transpiled Scripts _________
    // paths.distJS+"gulp-babel-transpiled-scripts.js",

    // Polyfills _________
    paths.perch+"js/library/polyfills/nodelist-foreach.js",

    // Bootstrap _________
    paths.perch+"js/library/bootstrap-plugins/bootstrap-transition.js",
    paths.perch+"js/library/bootstrap-plugins/bootstrap-alert.js",
    paths.perch+"js/library/bootstrap-plugins/bootstrap-modal.js",
    // paths.perch+"js/library/bootstrap-plugins/bootstrap-collapse.js",
    // paths.perch+"js/library/bootstrap-plugins/bootstrap-tab.js",

    // Other Third-party _________
    paths.npm+"mousetrap/mousetrap.js",
    paths.npm+"parsleyjs/src/extra/validator/luhn.js",
    paths.npm+"parsleyjs/dist/parsley.js",
    paths.npm+"lazysizes/lazysizes.js",
    // paths.npm+"flickity/dist/flickity.pkgd.js",
    // paths.npm+"smooth-scroll/dist/js/smooth-scroll.polyfills.js",
    // paths.npm+"gumshoejs/dist/js/gumshoe.js",
    // paths.npm+"prismjs/prism.js",
    // paths.npm+"prismjs/components/prism-less.js",

    // Homegrown _________

    // *** High priority & load first
    paths.perch+"js/perch-core-scripts.js",
    paths.perch+"js/library/dispatcher.js",
    paths.perch+"js/library/navigation-system.js",

    // *** Nav link opening methods — !! choose one of these at most !!
    paths.perch+"js/library/child-nav-open-with-parent-click.js",
    // paths.perch+"js/library/child-nav-open-with-generated-button.js",

    // *** Part of the Stacked Layout starter layout
    // paths.perch+"js/library/drawer-navigation.js",
    // paths.perch+"js/library/panel-search-system.js",

    // *** Part of the Positioned Layout starter layout
    // paths.perch+"js/library/hiding-sticky-nav.js",
    paths.perch+"js/library/modal-search-system.js",

    // *** Misc other scripts
    // paths.perch+"js/library/reactive-shine-hover.js",
    paths.perch+"js/library/mousetrap-keyboard-shortcuts.js",
    // paths.perch+"js/library/video-autoplay-fallback.js",
    // paths.perch+"js/library/wordpress/wp-hide-show-comments.js",

    // Homegrown Ecommerce _________
    // paths.perch+"js/library/ecommerce/product-thumbnails.js",
    // paths.perch+"js/library/ecommerce/billing-same-as-shipping.js",
    // paths.perch+"js/library/ecommerce/cart-quantity-updater.js",

    // Font Awesome Icons _________
    // paths.srcJS+"tree-shaken-icons.js",
  ];

  // an array of all source files to be used only in the development process (for final site JS files, see the srcFiles array above)
  var devOnlySrcFiles = [
    paths.npm+"holderjs/holder.js",
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
      .pipe(uglify())
      .pipe(rename({suffix: ".min"}))
      .pipe(sourcemaps.write("./maps"))
      .pipe(gulp.dest(paths.distJS));

    return merge(sourceDevelopment, sourceProduction);
  }
  return sourceDevelopment;
});


// Icons Task (Font Awesome)
// ---------------------------------------
gulp.task('icons', function() {
  return rollup({
    input: paths.srcJS+'icons-import.js',
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
  })

  // give the file the name you want to output with
  .pipe(source('tree-shaken-icons.js'))

  // output
  .pipe(gulp.dest(paths.srcJS));
});


// Copy Tasks
// ---------------------------------------
gulp.task('copy', [
  'copy:jquery',
  'copy:modernizr',
  'copy:icons',
  'copy:autotrack'
]);

gulp.task('copy:jquery', function() {
  gulp.src([paths.npm+'jquery/dist/jquery.min.js'])
    // .pipe( rename(`jquery-${pkg.dependencies.jquery}.min.js`) )
    .pipe(gulp.dest(paths.distJS));
});

gulp.task('copy:modernizr', function() {
  gulp.src([paths.perch+'js/modernizr-custom.js'])
    .pipe(gulp.dest(paths.distJS));
});

gulp.task('copy:autotrack', function() {
  gulp.src([paths.npm+'autotrack/autotrack.js'])
    .pipe(gulp.dest(paths.distJS));
  gulp.src([paths.npm+'autotrack/autotrack.js.map'])
    .pipe(gulp.dest(paths.distJS));
});

// Icons files
gulp.task('copy:icons', function() {
  gulp.src([paths.perch+'icons/**/*'])
    .pipe(gulp.dest(paths.distIcons));
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
  "copy",
  "less",
  "js"
]);

// gulp watch
// --------------------------
gulp.task("watch", ["default", /*"browserSync"*/], function () {
  gulp.watch(paths.npm+"jquery/**/*.js", ["copy:jquery"]);
  gulp.watch(paths.npm+"autotrack/**/*.js", ["copy:autotrack"]);
  gulp.watch(paths.srcAssets+"**/*.less", ["less"]);
  gulp.watch(paths.srcAssets+"**/*.js", ["js"]);
});
