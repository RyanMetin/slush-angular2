var gulp = require('gulp'),
  connect = require('gulp-connect'),
  del = require('del'),
  open = require('opn'),
  plumber = require('gulp-plumber'),
  traceur = require('gulp-traceur');

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
    }))
    .pipe(rename({extname:'.js'}))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
});

gulp.task('lib', function() {
  gulp.src([
    'node_modules/angular2/node_modules/traceur/bin/traceur.js',
    'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/angular2/node_modules/zone.js/long-stack-trace-zone.js',
    'node_modules/angular2/node_modules/zone.js/zone.js',
    'node_modules/es6-module-loader/dist/es6-module-loader.js',
    'node_modules/es6-module-loader/dist/es6-module-loader.js.map',
    'node_modules/systemjs/dist/system.js',
    'node_modules/systemjs/dist/system.js.map'
  ])
});

gulp.task('serve', function() {
  connect.server({
    root: 'src',
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