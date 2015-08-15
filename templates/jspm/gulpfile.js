'use strict';

var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('serve', function() {
	gulp.src('./').pipe(webserver({livereload: true, open: true}));
});
