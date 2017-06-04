'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass'], function () {
    // Start browser process
    electron.start();
    // Restart browser process
    gulp.watch('app.js', electron.restart);
    // Reload renderer process
    gulp.watch(['index.html'], electron.reload);
});