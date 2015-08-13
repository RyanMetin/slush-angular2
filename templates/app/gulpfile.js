'use strict';

var gulp = require('gulp'),
	Builder = require('systemjs-builder'),
	del = require('del'),
	merge = require('merge-stream'),
	path = require('path'),
	plumber = require('gulp-plumber'),
	run = require('run-sequence'),
	sourcemap = require('gulp-sourcemaps'),
	ts = require('gulp-typescript'),
	webserver = require('gulp-webserver');

gulp.task('build', function(cb) {
	run('clean:dist', ['build:angular2', 'build:lib'], ['build:html', 'build:ts'], cb);
});
gulp.task('build:angular2', function() {
	var angular2 = new Builder(gulpCfg.devCfg);
	return angular2.build('angular2/angular2', 'dist/lib/angular2.js', {});
});
gulp.task('build:html', function() {
	gulp.src('./src/**/*.html').pipe(gulp.dest('./dist'));
});
gulp.task('build:lib', function() {
	gulp.src(gulpCfg.deps).pipe(gulp.dest('./dist/lib'));
});
gulp.task('build:ts', function() {
	var tsProject = ts.createProject('./tsconfig.json', {typescript: require('typescript')});
	var tsResult = gulp.src('./src/**/*.ts')
		.pipe(plumber())
		.pipe(sourcemap.init())
		.pipe(ts(tsProject));
	return tsResult.js
		.pipe(sourcemap.write())
		.pipe(gulp.dest('./dist'));
});

gulp.task('clean:dist', function(cb) { del(['./dist'], cb); });

gulp.task('serve', function() {
	gulp.watch('./src/**/*.ts', ['build:ts']);
	gulp.src('./dist').pipe(webserver({livereload: true, open: true}));
});

var gulpCfg = {
	deps: [
		'./node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
		'./node_modules/angular2/node_modules/reflect-metadata/Reflect.js',
		'./node_modules/angular2/node_modules/reflect-metadata/Reflect.js.map',
		'./node_modules/angular2/node_modules/rtts_assert/rtts_assert.js',
		'./node_modules/angular2/node_modules/zone.js/dist/zone.js',
		'./node_modules/systemjs/dist/system.js',
		'./node_modules/systemjs/dist/system.js.map',
		'./node_modules/systemjs/node_modules/es6-module-loader/dist/es6-module-loader.js'
	],
	devCfg: {
		defaultJSExtensions: true,
		paths: {
			'angular2/*': 'node_modules/angular2/es6/dev/*.js',
			'rx': 'node_modules/angular2/node_modules/rx/dist/rx.js'
		},
		meta: {
			'rx': {format: 'cjs'}
		}
	}
};
