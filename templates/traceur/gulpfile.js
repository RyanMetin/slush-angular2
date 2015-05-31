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
		bundle.config({baseURL: 'file:' + path.resolve('./'), meta: {'zone.js': {format: 'global'}}});
		return bundle.buildSFX('reflect-metadata + src/index', 'dist/bundle.js', {minify: true, sourceMaps: true});
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

gulp.task('lint:js', function() {
	gulp.src('./src/**/*.js')
		.pipe(eslint('package.json'))
		.pipe(eslint.format('stylish'));
});

gulp.task('src', ['serve:src', 'watch']);
gulp.task('serve:src', function() {
	gulp.src('./').pipe(webserver({livereload: true, open: 'http://localhost:8000/src/'}));
});

gulp.task('dist', ['serve:dist', 'watch']);
gulp.task('serve:dist', function() {
	gulp.src('./dist').pipe(webserver({open: true}));
});

gulp.task('watch', function() {
	gulp.watch('./src/*.html', ['build:html']);
	gulp.watch('./src/**/*.js', ['lint:js']);
});