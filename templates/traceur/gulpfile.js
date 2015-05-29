'use strict';

var gulp = require('gulp'),
	Builder = require('systemjs-builder'),
	del = require('del'),
	eslint = require('gulp-eslint'),
	merge = require('merge-stream'),
	path = require('path'),
	replace = require('gulp-html-replace'),
	run = require('run-sequence'),
	webserver = require('gulp-webserver');

gulp.task('build:all', ['clean'], function(cb) {
	run('build:html', 'build:bundle', cb);
});

gulp.task('build:bundle', function() {
	var bundle = new Builder();
	return bundle.loadConfig('./src/config.js').then(function() {
		bundle.config({baseURL: 'file:' + path.resolve('./')});
		return bundle.buildSFX('reflect-metadata + zone.js + src/index', 'dist/bundle.js', {minify: true, sourceMaps: true});
	});
});

gulp.task('build:html', function() {
	var html = gulp.src('./src/*.html').pipe(replace({'bundle': 'bundle.js'})).pipe(gulp.dest('./dist')),
		meta = gulp.src('./src/content/**').pipe(gulp.dest('./dist'));
	return merge(html, meta);
});

gulp.task('clean', function(cb) {
	del(['./dist', './src/js'], cb);
});

gulp.task('default', ['serve:src', 'lint:js']);

gulp.task('lint:js', function() {
	gulp.src('./src/**/*.js')
		.pipe(eslint('package.json'))
		.pipe(eslint.format('stylish'));
});

gulp.task('serve:src', ['src', 'watch']);
gulp.task('src', function() {
	gulp.src('./').pipe(webserver({livereload: true, open: 'http://localhost:8000/src/'}));
});

gulp.task('serve:dist', ['dist', 'watch']);
gulp.task('dist', function() {
	gulp.src('./dist').pipe(webserver({open: true}));
});

gulp.task('watch', function() {
	gulp.watch('./src/*.html', ['build:html']);
	gulp.watch('./src/**/*.js', ['lint:js']);
});