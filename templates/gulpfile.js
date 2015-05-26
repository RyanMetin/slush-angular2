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
	run('build:ts', cb);
});

gulp.task('build:angular2', function() {
	return build.build('angular2/angular2', './js/lib/angular2.js', {sourceMaps: true});
});

gulp.task('build:bundle', function() {
	bundle.loadConfig('./js/config.js').then(function() {
		bundle.config({baseURL: 'file:' + path.resolve('./js')});
		return bundle.buildSFX('js/index', './js/bundle.js', {minify: true, sourceMaps: true});
	});
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
	gulp.watch('./src/**', ['build:ts']);
});