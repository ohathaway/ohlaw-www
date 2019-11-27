var fs          = require('fs');
var gulp        = require('gulp');
var vinyl       = require('vinyl');
var sass        = require('gulp-sass');
var header      = require('gulp-header');
var cleanCSS    = require('gulp-clean-css');
var rename      = require('gulp-rename');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var googleFonts = require('gulp-google-webfonts');
var awspublish  = require('gulp-awspublish')
var browserSync = require('browser-sync').create();
var yaml        = require('yaml');
var pkg         = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * OHLaw www template - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2019-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://ohlawcolorado.com/LICENSE)\n',
  ' */\n',
  ''
].join('');

// Bootstrap JS
function bootstrap_js() {
 return gulp.src('./node_modules/bootstrap/dist/js/*')
   .pipe(gulp.dest('./src/vendor/bootstrap'));
};

// Devicons
function devicons() {
  return gulp.src([
      './node_modules/devicons/**/*',
      '!./node_modules/devicons/*.json',
      '!./node_modules/devicons/*.md',
      '!./node_modules/devicons/!PNG',
      '!./node_modules/devicons/!PNG/**/*',
      '!./node_modules/devicons/!SVG',
      '!./node_modules/devicons/!SVG/**/*'
    ])
    .pipe(gulp.dest('./src/vendor/devicons'))
    ;
};

// Font Awesome
function fontawesome_css() {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/css/*')
          .pipe(gulp.dest('./src/vendor/fontawesome/css'))
          ;
};
function fontawesome_fonts() {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
          .pipe(gulp.dest('./src/vendor/fontawesome/webfonts'))
          ;
};

// jQuery
function jquery() {
  return gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./src/vendor/jquery'))
    ;

  // jQuery Easing
  /*
  gulp.src([
      './node_modules/jquery.easing/*.js'
    ])
    .pipe(gulp.dest('./vendor/jquery-easing'))
    ;
    */
};

// Simple Line Icons
function line_icons() {
  return gulp.parallel( gulp.src('./node_modules/simple-line-icons/fonts/**')
    .pipe(gulp.dest('./src/vendor/simple-line-icons/fonts')),
    gulp.src('./node_modules/simple-line-icons/css/**')
      .pipe(gulp.dest('./vendor/simple-line-icons/css'))
    );
};

// Google Fonts
function google_fonts() {
  return gulp.src('./src/css/google-fonts.list')
          .pipe(googleFonts({ cssFilename: "google-fonts.css" }))
          .pipe(gulp.dest('./src/css/fonts'))
          ;
}

// Copy third party libraries from /node_modules into /vendor
function vendors(cb) {
   gulp.series('devicons', 'fontawesome', 'jquery', 'line_icons', 'google_fonts');
   cb();
};

/*
 * Deal with styles
 */
// Compile SCSS
function css_compile() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
};

// Minify CSS
function css_minify() {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
};

// CSS
function styles(cb) {
  gulp.series('css_compile', 'css_minify');
  cb();
};

// Minify JavaScript
function js_minify() {
  return gulp.src([
      './src/js/*.js',
      '!./src/js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
};

function minifyHtml() {
};


// Configure the browserSync task
function watch() {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
  gulp.watch('/src/scss/**/*.scss', styles);
  gulp.watch('/src/css/*.css', styles);
  gulp.watch('/src/js/*.js', js_minify);
  gulp.watch('./src/*.html', browserSync.reload);
};


// Publish to AWS S3
function publish(cb) {
  var serverless_config = yaml.parse(fs.readFileSync('./serverless.yml', 'utf8'));
  var bucket_config = yaml.parse(fs.readFileSync('./api/resources/site_bucket.yml', 'utf8'));
  var bucket_name = bucket_config.Properties.BucketName.replace(/\$\{self\:provider\.stage\}/, serverless_config.provider.stage);
  var publish_options = {
    region: process.env.AWS_REGION,
    params: {
      Bucket: bucket_name
    }
  }
  console.log(publish_options);

  var publisher = awspublish.create(publish_options);
  return gulp.src('./src/**')
          .pipe(awspublish.gzip())
          .pipe(publisher.publish())
          .pipe(publisher.cache())
          .pipe(awspublish.reporter())
  ;
  //cb();
}

// Default task
var defaultTask = function() {
  gulp.parallel('styles', 'js_minify', 'vendor');
}

// Vendor includes
exports.bootstrap_js = bootstrap_js;
exports.devicons     = devicons;
exports.fontawesome  = gulp.parallel(fontawesome_css, fontawesome_fonts);
exports.jquery       = jquery;
exports.line_icons   = line_icons;
exports.google_fonts = google_fonts;
exports.vendors      = gulp.parallel(devicons,jquery,line_icons,google_fonts);

exports.css_compile = css_compile;
exports.css_minify  = css_minify;
exports.styles      = gulp.parallel(css_compile, css_minify);

exports.js_minify = js_minify;

exports.watch   = watch;
exports.dev     = gulp.series(vendors, css_compile, watch);
exports.publish = publish;
