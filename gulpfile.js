'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var sass = require('gulp-sass');
const babel = require('gulp-babel');
var gutil = require('gulp-util');

// uglify()
gulp.task('babel', function() {
    gutil.log('start compile ', gutil.colors.green('babel'));
    return gulp.src('./js/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./www/js'));
})

gulp.task('sass', function() {
    gutil.log('start compile ', gutil.colors.green('sass'));
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./www/css'));
});

gulp.task('watch', function() {
    gutil.log('start ', gutil.colors.green('watching'));

    gulp.watch('./js/**/*.js', ['babel']);
    gulp.watch('./scss/**/*.scss', ['sass']);

    gulp.watch('app.js', electron.restart);
    gulp.watch(['index.html', './js/**/*.js', './scss/**/*.scss'], electron.reload);
});

gulp.task('default', ['sass', 'babel', 'watch'], function() {
    // Start browser process
    electron.start();
});