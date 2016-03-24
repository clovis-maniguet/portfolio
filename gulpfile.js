'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/stylesheet'));
});
 
gulp.task('scripts', function() {
  return gulp.src('./src/js/lib/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./src/js/dist/'));
});

gulp.task('templates', function(){
  gulp.src('./src/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'portfolio.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./src/js/dist/'));
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/lib/**/*.scss', ['scripts']);
});