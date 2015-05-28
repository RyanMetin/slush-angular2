'use strict';

var gulp = require('gulp'),
	Builder = require('systemjs-builder'),
	del = require('del'),
	merge = require('merge-stream'),
	path = require('path'),
	plumber = require('gulp-plumber'),
	run = require('run-sequence'),
	ts = require('gulp-typescript'),
	webserver = require('gulp-webserver');

gulp.task('build:all', function(cb) {
	run('build:lib', 'build:ts', cb);
});
gulp.task('build:angular2', function() {
	var builder = new Builder({
		paths: {'angular2/*': 'node_modules/angular2/es6/prod/*.es6', 'rx': 'node_modules/angular2/node_modules/rx/dist/rx.js'}, 
		meta: {'rx': {format: 'cjs'}}
	});
	return builder.build('angular2/*', './lib/angular2.js');
});
gulp.task('build:bundle', function() {
	var bundle = new Builder();
	return bundle.buildSFX('js/index', 'dist/bundle.js', {minify: true, sourceMaps: true});
});
gulp.task('build:lib', ['clean:lib'], function(cb) {
	run(['copy:definitions', 'copy:dependencies'], 'build:angular2', cb);
});
gulp.task('build:ts', ['clean:js'], function() {
	var tsProject = ts.createProject('./tsconfig.json', {typescript: require('typescript')});
	var tsResult = gulp.src('./ts/**/*.ts')
		.pipe(plumber())
		.pipe(ts(tsProject));
	return tsResult.js.pipe(gulp.dest('./js'));
});

gulp.task('clean:js', function(cb) { del(['./js'], cb); });
gulp.task('clean:lib', function(cb) { del(['./lib'], cb); });

gulp.task('copy:definitions', function() {
	var zone = gulp.src('./node_modules/angular2/atscript/typings/zone/zone.d.ts'),
		reflect = gulp.src('./node_modules/reflect-metadata/reflect-metadata.d.ts'),
		typescript = gulp.src('./node_modules/typescript/bin/lib.es6.d.ts');
	return merge(reflect, typescript, zone).pipe(gulp.dest('./typings'));
});
gulp.task('copy:dependencies', function() {
	gulp.src([
	    './node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
	    './node_modules/angular2/node_modules/zone.js/dist/zone.js',
	    './node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js',
	    './node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.js.map',
	    './node_modules/reflect-metadata/Reflect.js',
	    './node_modules/reflect-metadata/Reflect.js.map',
	    './node_modules/systemjs/dist/system.js',
	    './node_modules/systemjs/dist/system.js.map'
	]).pipe(gulp.dest('./lib'));
});

gulp.task('default', ['serve', 'watch']);
gulp.task('serve', function() {
	gulp.src('./').pipe(webserver({livereload: true, open: true}));
});
gulp.task('watch', function() {
	gulp.watch('./ts/**/*.ts', ['build:ts']);
});
