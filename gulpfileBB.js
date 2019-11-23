const gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var browserSync = require('browser-sync').create();

const files = { "scssPath": "./src/scss", "jsPath": "./src/js" }
// Set the banner content
var banner = ['/*!\n',
  ' * OHLaw - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2019-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://ohlawcolorado.com/<%= pkg.name %>/LICENSE)\n',
  ' */\n',
  ''
].join('');

// Copy third party libraries from /node_modules into /vendor
  // Bootstrap
  // Devicons
  // Font Awesome
  // jQuery
  // jQuery Easing
  // Simple Line Icons

// Minifi html
//var minifyHtml = function(
// Compile SCSS

// Minify CSS

// CSS
//gulp.task('css', ['css:compile', 'css:minify']);

// Minify JavaScript
// JS


// Configure the browserSync task
var serve = function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
};
//const defaultTasks = gulp.parallel(serve, watch)
const defaultTasks = gulp.parallel(serve)
exports.default = defaultTasks
