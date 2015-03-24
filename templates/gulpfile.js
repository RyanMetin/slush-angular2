var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('start',function(){
  browserSync({server:{baseDir:'./src'}});
});

gulp.task('default',['start']);