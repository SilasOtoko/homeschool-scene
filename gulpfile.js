var gulp       = require("gulp");
var cleanCSS   = require("gulp-clean-css");
var concat     = require("gulp-concat");
var less       = require("gulp-less");
var rename     = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
// var path         = require("path");



// LESS Compilation
// --------------------------
gulp.task("less", function() {
  return gulp.src("assets/less/global.less")

    // Required to be first
    .pipe(sourcemaps.init())

    // The base LESS compilation
    .pipe(less())

    // Write the compiled LESS to a CSS file
    .pipe(gulp.dest("assets/css"))

    // Run Source Maps and create a maps directory
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("assets/css"))

    // Create a .min version of the CSS
    .pipe(rename({ suffix: ".min" }))
    // .pipe(cleanCSS({ compatibility: "*" }))
    .pipe(gulp.dest("assets/css"));
});


// Concatenate & Minify JS
// --------------------------
gulp.task("js", function() {
    var srcFiles = [
        "assets/third-party/perch/js/bootstrap-transition.js",
        "assets/third-party/perch/js/bootstrap-alert.js",
        "assets/third-party/perch/js/bootstrap-modal.js",
        // "assets/third-party/perch/js/bootstrap-collapse.js",
        // "assets/third-party/perch/js/bootstrap-tab.js",
        "assets/third-party/perch/js/mousetrap.js",
        "assets/third-party/perch/js/parsley.luhn.js",
        "assets/third-party/perch/js/parsley.js",
        "assets/third-party/perch/js/smooth-scroll.js",
        "assets/third-party/perch/js/perch-scripts.js",
        // "assets/third-party/perch/js/library/wordpress/wp-hide-show-comments.js",
    ];
    // gulp.src(config.src.js + "/modernizr-custom.js").pipe(gulp.dest(config.dest.js));
    // gulp.src(config.src.js + "/app/**/*.js").pipe(gulp.dest(config.dest.js + "/app"));

    return gulp.src(srcFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest("assets/js"));
        // .pipe(gulpif(argv.production, uglify()))
        // .pipe(gulpif(argv.production, rename({suffix: ".min"})))
        // .pipe(gulpif(argv.production, gulp.dest(config.dest.js)))
});



// Default Tasks
// ---------------------------------------
gulp.task( "default", ["less", "js"]);

gulp.task("watch", function () {
    gulp.watch("assets/**/*.js", ["js"]);
    gulp.watch("assets/**/*.less", ["less"]);
});