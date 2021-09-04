const fs = require('fs')
const gulp = require('gulp')
const vinyl = require('vinyl')
const sass = require('gulp-sass')
const header = require('gulp-header')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const terser = require('gulp-terser')
const googleFonts = require('gulp-google-webfonts')
const awspublish = require('gulp-awspublish')
const browserSync = require('browser-sync').create()
const yaml = require('yaml')
const pkg = require('./package.json')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const useref = require('gulp-useref')
const htmlmin = require('gulp-htmlmin')

// Set the banner content
var banner = ['/*!\n',
  ' * OHLaw www template - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2019-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://ohlawcolorado.com/LICENSE)\n',
  ' */\n',
  ''
].join('')

const paths = {
  styles: {
    src: 'src/styles/**/*.css',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  }
}

// Bootstrap JS
function bootstrap_js () {
  return gulp.src('./node_modules/bootstrap/dist/js/*')
    .pipe(gulp.dest('./src/vendor/bootstrap'))
};

// Devicons
function devicons () {
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
};

// Font Awesome
function fontawesome_css () {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/css/*')
    .pipe(gulp.dest('./src/vendor/fontawesome/css'))
};
function fontawesome_fonts () {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest('./src/vendor/fontawesome/webfonts'))
};

// jQuery
function jquery () {
  return gulp.src([
    './node_modules/jquery/dist/*',
    '!./node_modules/jquery/dist/core.js'
  ])
    .pipe(gulp.dest('./src/vendor/jquery'))

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
function line_icons (done) {
  gulp.src('./node_modules/simple-line-icons/fonts/**')
    .pipe(gulp.dest('./src/vendor/simple-line-icons/fonts'))

  gulp.src('./node_modules/simple-line-icons/css/**')
    .pipe(gulp.dest('./vendor/simple-line-icons/css'))
  done()
};

// Google Fonts
function google_fonts () {
  return gulp.src('./src/css/google-fonts.list')
    .pipe(googleFonts({ cssFilename: 'google-fonts.css', host: 'fonts.googleapis.com' }))
    .pipe(gulp.dest('./src/css/fonts'))
};

// Copy third party libraries from /node_modules into /vendor
function vendors (done) {
  // gulp.series('devicons', 'fontawesome', 'jquery', 'line_icons', 'google_fonts');
  gulp.series('devicons', 'fontawesome', 'jquery', 'line_icons')
  done()
};

/*
 * Deal with styles
 */
// Compile SCSS
function css_compile () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
};

// Minify CSS
function css_minify () {
  return gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'))
};

// CSS
function styles (done) {
  gulp.series(css_compile, css_minify)
  done()
};

// Minify JavaScript
function js_minify () {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js/'))
};

// Configure the browserSync task
// hack to make browserSync work correctly
function bsReload (done) {
  browserSync.reload()
  done()
}

function watch () {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  })
  gulp.watch('./src/scss/**/*.scss', gulp.series(css_compile, bsReload))
  // gulp.watch('./src/css/*.css', gulp.series(styles, browserSync.reload));
  gulp.watch('./src/js/*.js', gulp.series(js_minify, bsReload))
  gulp.watch('./src/*.html', bsReload)
};

function html_minify (done) {
  var html_min_options = {
    removeComments: true,
    removeRedundantAttributes: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true
  }

  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(htmlmin(html_min_options))
    .pipe(gulp.dest('dist'))
  done()
}

// Publish to AWS S3
function publish (env, done) {
  var serverless_config = yaml.parse(fs.readFileSync('./serverless.yml', 'utf8'))
  var bucket_config = yaml.parse(fs.readFileSync('./api/resources/site_bucket.yml', 'utf8'))
  var bucket_name = bucket_config.Properties.BucketName.replace(/\$\{self\:provider\.stage\}/, 'dev')
  var publish_options = {
    region: process.env.AWS_REGION,
    params: {
      Bucket: bucket_name
    }
  }
  console.log(publish_options)

  var publisher = awspublish.create(publish_options)
  return gulp.src('./src/**')
    .pipe(awspublish.gzip())
    .pipe(publisher.publish())
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())

  // done();
}

/*
  Publish site to production
  */

function copy_img (done) {
  return gulp.src('./src/img/**')
    .pipe(gulp.dest('./dist/img/'))
  done()
}

function copy_vendors (done) {
  return gulp.src('./src/vendor/**/*')
    .pipe(gulp.dest('./dist/vendor/'))
  done()
}

function publish_prod (done) {
  var serverless_config = yaml.parse(fs.readFileSync('./serverless.yml', 'utf8'))
  var bucket_config = yaml.parse(fs.readFileSync('./api/resources/site_bucket.yml', 'utf8'))
  var bucket_name = bucket_config.Properties.BucketName.replace(/\$\{self\:provider\.stage\}/, 'prod')
  var publish_options = {
    region: process.env.AWS_REGION,
    params: {
      Bucket: bucket_name
    }
  }

  console.log(publish_options)

  var publisher = awspublish.create(publish_options)
  return gulp.src('./dist/**')
    .pipe(awspublish.gzip())
    .pipe(publisher.publish())
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())

  // done();
}

// Default task
var defaultTask = function () {
  gulp.parallel('styles', 'js_minify', 'vendor')
}

// Vendor includes
exports.bootstrap_js = bootstrap_js
exports.devicons = devicons
exports.fontawesome = gulp.parallel(fontawesome_css, fontawesome_fonts)
exports.jquery = jquery
exports.line_icons = line_icons
// Something broke this plugin
// exports.google_fonts = google_fonts;
// exports.vendors      = gulp.parallel(devicons,jquery,line_icons,google_fonts);
exports.vendors = gulp.parallel(devicons, jquery, line_icons)

exports.css_compile = css_compile
exports.css_minify = css_minify
exports.styles = gulp.parallel(css_compile, css_minify)

exports.js_minify = js_minify
exports.html_minify = html_minify

exports.watch = watch
exports.dev = gulp.series(vendors, css_compile, watch)
exports.publish = publish

exports.copy_img = copy_img
exports.copy_vendors = copy_vendors
exports.build_dist = gulp.series(copy_img, copy_vendors, js_minify, css_compile, css_minify, html_minify)
exports.publish_prod = gulp.series(copy_img, copy_vendors, js_minify, css_compile, css_minify, html_minify, publish_prod)
