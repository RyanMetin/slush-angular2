var gulp = require('gulp'),
  connect = require('gulp-connect'),
  open = require('opn');

gulp.task('serve', function() {
  connect.server({
    root: 'src',
    port: 5050,
    livereload: true
  });
  open('http://localhost:5050');
});

gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./src/app/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/app/*.js', ['js']);
});

gulp.task('default', ['serve','watch']);