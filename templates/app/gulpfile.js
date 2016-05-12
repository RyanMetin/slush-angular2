const gulp = require('gulp'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  inject = require('gulp-inject'),
  sourcemap = require('gulp-sourcemaps'),
  tslint = require('gulp-tslint'),
  tsc = require('gulp-typescript'),
  uglify = require('gulp-uglify'),
  path = require('path'),
  Builder = require('systemjs-builder'),
  cfg = {
    lib: {
      polyfill: [
        require.resolve('es6-shim/es6-shim.js'),
        require.resolve('zone.js/dist/zone.js'),
        require.resolve('reflect-metadata/Reflect.js'),
        require.resolve('systemjs/dist/system.src.js')
      ]
    },
    config: 'system.config.js',
    tsProject: tsc.createProject('tsconfig.json', { typescript: require('typescript') })
  };
  

gulp.task('default', ['compile', 'polyfill']);

gulp.task('build:prod', ['compile'], () => {
  builder = new Builder('.', cfg.config);
  return builder.buildStatic('app', './dist/build.js', { mangle: false, minify: true, sourceMaps: true });
});

gulp.task('compile', ['lint'], () => {
  gulp.src(['src/**/*.ts', 'typings/browser.d.ts'])
    .pipe(tsc(cfg.tsProject))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('inject:dev', () => {
  gulp.src('./index.html')
    .pipe(inject(gulp.src([cfg.config]), {
      removeTags: true,
      starttag: '<!-- inject:dev -->',
      transform: function (filePath, file) {
        return '<!-- inject:prod -->\n\t<script src="' + filePath + '"></script>\n\t<script>System.import(\'app\').catch(console.error.bind(console));</script>\n\t<!-- endinject -->';
    }}))
    .pipe(gulp.dest('.'));
});

gulp.task('inject:prod', ['build:prod'], () => {
  gulp.src('./index.html')
    .pipe(inject(gulp.src(['dist/build.js']), {
      removeTags: true,
      starttag: '<!-- inject:prod -->',
      transform: function (filePath, file) {
        return '<!-- inject:dev --><script src="' + filePath + '"></script><!-- endinject -->';
    }}))
    .pipe(gulp.dest('.'));
});

gulp.task('lint', () => {
  gulp.src('src/**/*.ts')
    .pipe(tslint({ tslint: require('tslint') }))
    .pipe(tslint.report('prose', { emitError: false }));
});

gulp.task('polyfill', () => {
  gulp.src(cfg.lib.polyfill, { base: './node_modules' })
    .pipe(sourcemap.init())
    .pipe(uglify({ mangle: false }))
    .pipe(concat('polyfill.js'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('start:dev', ['serve:dev', 'watch']);
gulp.task('start:prod', ['serve:prod']);

gulp.task('serve:dev', ['inject:dev'], () => {
  connect.server({
    livereload: true,
    fallback: 'index.html'
  });
});

gulp.task('serve:prod', ['inject:prod'], () => {
  connect.server({
    fallback: 'index.html'
  });
});

gulp.task('watch', ['compile'], () => {
  gulp.watch('src/**/*.ts', ['compile']);
});