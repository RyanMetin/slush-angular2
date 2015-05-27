var gulp = require('gulp'),
	Builder = require('systemjs-builder'),
	del = require('del'),
	merge = require('merge-stream'),
	path = require('path'),
	plumber = require('gulp-plumber'),
	run = require('run-sequence'),
	source = require('gulp-sourcemaps'),
	ts = require('gulp-typescript'),
	webserver = require('gulp-webserver'),

	tsProject = ts.createProject('tsconfig.json', {typescript: require('typescript')}),
	
	build = new Builder({
		paths: {
			'angular2/*': 'node_modules/angular2/es6/prod/*.es6',
			'rx': 'node_modules/angular2/node_modules/rx/dist/rx.js'
		}, meta: {
			'rx': {format: 'cjs'}
		}
	}),
	
	bundle = new Builder();

gulp.task('build', ['clean'], function(cb) {
	run(['build:copy', 'build:angular2', 'build:router'], 'build:ts', cb);
});

gulp.task('build:angular2', function() {
	return build.build('angular2/angular2', './js/lib/angular2.js', {sourceMaps: true});
});

gulp.task('build:bundle', function() {
	return bundle.buildSFX('js/index', './dist/bundle.js', {minify: true, sourceMaps: true});
});

gulp.task('build:copy', function() {
	gulp.src([
		'node_modules/angular2/node_modules/rx/dist/rx.all.js',
		'node_modules/angular2/node_modules/rx/dist/rx.all.map',
		'node_modules/angular2/node_modules/traceur/bin/traceur.js',
		'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
		'node_modules/angular2/node_modules/zone.js/dist/zone.js',
		'node_modules/reflect-metadata/reflect.js',
		'node_modules/reflect-metadata/reflect.js.map',
		'node_modules/systemjs/dist/system.js',
		'node_modules/systemjs/dist/system.js.map',
		'node_modules/systemjs/node_modules/es6-module-loader/dist/es6-module-loader.js',
		'node_modules/systemjs/node_modules/es6-module-loader/dist/es6-module-loader.js.map'
	]).pipe(gulp.dest('./js/lib'));
});

gulp.task('build:router', function() {
	return build.build('angular2/router', './js/lib/router.js', {sourceMaps: true});
});

gulp.task('build:ts', function() {
	var tsResult = gulp.src('./ts/**/*.ts')
		.pipe(plumber())
		.pipe(source.init())
		.pipe(ts(tsProject));
	return tsResult.js
		.pipe(source.write())
		.pipe(gulp.dest('./js'));
});

gulp.task('clean', function(cb) {
	del(['./dist', './js'], cb);
});

gulp.task('default', ['serve', 'watch']);

gulp.task('serve', function() {
	gulp.src('./').pipe(webserver({livereload: true, open:true}));
});

gulp.task('watch', function() {
	gulp.watch('./ts/**/*.ts', ['build:ts']);
});