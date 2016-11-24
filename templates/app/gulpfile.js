const gulp = require('gulp'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect'),
  inject = require('gulp-inject'),
  sourcemap = require('gulp-sourcemaps'),
  tslint = require('gulp-tslint'),
  tsc = require('gulp-typescript'),
  uglify = require('gulp-uglify'),
  Builder = require('systemjs-builder'),
  cfg = {
    build: 'dist/build.js',
    config: 'dist/config.js',
    index: 'index.html',
    lib: [
      require.resolve('core-js/client/shim.js'),
      require.resolve('zone.js/dist/zone.js'),
      require.resolve('reflect-metadata/Reflect.js'),
      require.resolve('systemjs/dist/system.src.js')
    ],
    ts: 'src/**/*.ts',
    tsProject: tsc.createProject('tsconfig.json', { typescript: require('typescript') })
  };

gulp.task('default', ['polyfill']);

gulp.task('build', ['compile'], () => {
  builder = new Builder('.', cfg.config);
  return builder.buildStatic('app', cfg.build, { mangle: false, minify: true, sourceMaps: true });
});

gulp.task('compile', ['lint'], (cb) => {
  gulp.src(cfg.ts)
    .pipe(cfg.tsProject())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
    .on('end', cb);
});

gulp.task('inject:dev', ['compile'], () => {
  gulp.src(cfg.index)
    .pipe(inject(gulp.src([cfg.config]), {
      addRootSlash: false, starttag: '<!-- inject:app -->',
      transform: (filePath, file) => `\b\n\t<script src="${filePath}"></script>\n\t<script>SystemJS.import(\'app\').catch(console.error.bind(console));</script>\n\t`
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('inject:prod', ['build'], () => {
  gulp.src(cfg.index)
    .pipe(inject(gulp.src([cfg.build]), {
      addRootSlash: false, starttag: '<!-- inject:app -->',
      transform: (filePath, file) => `\b\n\t<script src="${filePath}"></script>\n\t`
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('lint', () => {
  gulp.src(cfg.ts)
    .pipe(tslint({ tslint: require('tslint') }))
    .pipe(tslint.report({ emitError: false }));
});

gulp.task('polyfill', () => {
  gulp.src(cfg.lib)
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
    fallback: cfg.index
  });
});

gulp.task('serve:prod', ['inject:prod'], () => {
  connect.server({
    fallback: cfg.index
  });
});

gulp.task('watch', ['compile'], () => {
  gulp.watch(cfg.ts, ['compile']);
});