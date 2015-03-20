var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    config = {
      basePath: './app',
      port: 5050
    };

<% if(sass) { %>
var sass = require('gulp-sass');
gulp.task('sass',function() {
  gulp.src('./app/content/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./app/content/css'))
      .pipe(livereload());
});
<% } %>

<% if(ts) { %>
var ts = require('gulp-typescript');
gulp.task('ts',function() {
  var typescript = gulp
      .src('./app/**/*.ts')
      .pipe(ts({
        declarationFiles: true,
        noExternalResolve: true
      }))
      .pipe(livereload());
  return typescript.js.pipe(gulp.dest('./app/script'));
  return typescript.dts.pipe(gulp.dest('./app/script/definitions'));
});
<% } %>

gulp.task('live-reload',function(){
  livereload.listen(config);
  <% if(sass) { %>
  gulp.watch('./app/sass/*.scss',['sass']);
  <% } %>
  <% if(ts) { %>
  gulp.watch('./app/sass/*.ts',['ts']);
  <% } %>
});

gulp.task('default',['live-reload']);