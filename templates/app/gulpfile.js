const gulp = require('gulp'),
  concat = require('gulp-concat'),
  flatten = require('gulp-flatten'),
  inline = require('gulp-inline-ng2-template'),
  sourcemap = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  path = require('path'),
  Builder = require('systemjs-builder'),
  cfg = {
    base: '.',
    lib: {
      polyfill: [
        require.resolve('es6-shim/es6-shim.js'),
        require.resolve('zone.js/dist/zone.js'),
        require.resolve('reflect-metadata/Reflect.js'),
        require.resolve('systemjs/dist/system.src.js')
      ]
    },
    npm: './node_modules',
    src: './src'
  };
  
gulp.task('polyfills', () => {
  gulp.src(cfg.lib.polyfill, { base: cfg.npm })
    .pipe(flatten())
    .pipe(gulp.dest(path.join(cfg.base, 'lib/polyfill')))
    .pipe(sourcemap.init())
    .pipe(uglify({ mangle: false }))
    .pipe(concat('polyfills.js'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(path.join(cfg.base, 'lib')));
});