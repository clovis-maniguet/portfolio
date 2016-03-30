'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var browserSync = require('browser-sync').create();
var config = require('./config.js');
 
gulp.task('sass', function () {
  return gulp.src( config.styles.sass )
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest( config.styles.dist ))
    .pipe(browserSync.stream());
});
 
gulp.task('scripts', function() {
  return gulp.src( config.scripts.app )
    .pipe(concat('app.js'))
    .pipe(gulp.dest( config.scripts.dist ))
    .pipe(browserSync.stream());
});

gulp.task('vendor', function() {
  return gulp.src( config.scripts.vendors )
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest( config.scripts.dist ));
});

gulp.task('templates', function(){
  gulp.src( config.templates.hbs )
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: config.templates.namespace,
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest( config.templates.dist ))
    .pipe(browserSync.stream());
});

gulp.task('default', function () {
    
    browserSync.init({
        proxy: config.vhost,
        port: 8080
    });
    
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/lib/**/*.js', ['scripts']);
  gulp.watch('./src/templates/**/*.hbs', ['templates']);
  gulp.watch("./src/*.html").on("change", browserSync.reload);
});