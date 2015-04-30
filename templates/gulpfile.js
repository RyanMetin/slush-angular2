var gulp = require('gulp'),
  builder = require('systemjs-builder'),
  connect = require('gulp-connect'),
  del = require('del'),
  open = require('opn'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  traceur = require('gulp-traceur');

gulp.task('build', function() {
  var angular2 = new builder({
    paths: {
      'angular2/*': 'node_modules/angular2/es6/prod/*.es6',
      'rx/*': 'node_modules/angular2/node_modules/rx/*.js'
    }
  });
  return angular2.build('angular2/angular2', 'build/lib/angular2.js', {});
});

gulp.task('clean', function(done) {
  del(['build'], done);
});

gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./src/app/*.js')
    .pipe(rename({extname:''}))
    .pipe(plumber())
    .pipe(traceur({
      annotations: true,
      memberVariables: true,
      moduleName: true,
      modules: 'instantiate',
      types: true
    })).pipe(rename({extname:'.js'}))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('lib', ['build'], function() {
  gulp.src([
    'node_modules/angular2/node_modules/traceur/bin/traceur.js',
    'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/angular2/node_modules/zone.js/long-stack-trace-zone.js',
    'node_modules/angular2/node_modules/zone.js/zone.js',
    'node_modules/es6-module-loader/dist/es6-module-loader.js',
    'node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.src.js',
    'node_modules/systemjs/dist/system.js'
  ]).pipe(gulp.dest('build/lib'));
});

gulp.task('serve', function() {
  connect.server({
    root: '/dist',
    port: 5050,
    livereload: true
  });
  open('http://localhost:5050');
});

gulp.task('watch', function() {
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/app/*.js', ['js']);
});

gulp.task('default', ['serve','watch']);