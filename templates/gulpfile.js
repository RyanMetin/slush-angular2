'use strict';

var gulp = require('gulp'),
	Builder = require('systemjs-builder'),
	del = require('del'),
	eslint = require('gulp-eslint'),
	merge = require('merge-stream'),
	path = require('path'),
	plumber = require('gulp-plumber'),
	replace = require('gulp-html-replace'),
	run = require('run-sequence'),
	ts = require('gulp-typescript'),
	webserver = require('gulp-webserver');

gulp.task('build:all', ['clean'], function(cb) {
	run(['build:html', 'build:definitions'], 'build:bundle', cb);
});

gulp.task('build:bundle', function() {
	var bundle = new Builder();
	return bundle.loadConfig('./src/config.js').then(function() {
		bundle.config({baseURL: 'file:' + path.resolve('./')});
		return bundle.buildSFX('reflect-metadata + zone.js + src/index', 'dist/bundle.js', {minify: true, sourceMaps: true});
	});
});

gulp.task('build:definitions', function() {
	var atscript = gulp.src('./jspm_packages/npm/angular2@2.0.0-alpha.25/atscript/typings/**').pipe(gulp.dest('./src/ts/typings')),
		reflect = gulp.src('./jspm_packages/npm/reflect-metadata@0.1.0/reflect-metadata.d.ts').pipe(gulp.dest('./src/ts/typings/reflect-metadata')),
		typescript = gulp.src('./node_modules/typescript/bin/lib.es6.d.ts').pipe(gulp.dest('./src/ts/typings'));
	return merge(atscript, reflect, typescript);
});

gulp.task('build:html', function() {
	var html = gulp.src('./src/*.html').pipe(replace({'bundle': 'bundle.js'})).pipe(gulp.dest('./dist')),
		meta = gulp.src('./src/content/**').pipe(gulp.dest('./dist'));
	return merge(html, meta);
});

gulp.task('build:ts', function() {
	var tsProject = ts.createProject('./tsconfig.json', {typescript: require('typescript')});
	var tsResult = gulp.src('./src/ts/**/*.ts')
		.pipe(plumber())
		.pipe(ts(tsProject));
	return tsResult.js.pipe(gulp.dest('./src/js'));
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
	gulp.watch('./src/ts/**/*.ts', ['build:ts']);
});