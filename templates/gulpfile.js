var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    shell = require('gulp-shell'),
    ts = require('gulp-typescript');

gulp.task('quickstart',shell.task([
  'git clone https://github.com/angular/quickstart.git app/lib',
  'cd app/lib',
  'rm -rf .git',
  'cd ../..'
]));

<% if(scss) { %>
gulp.task('sass',function() {
  gulp.src('./app/content/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./app/content/css'))
      .pipe(livereload());
});
<% } %>

<% if(ts) { %>
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
  livereload({
    basePath:'app',
    port:5050,
    start:true
  });
  <% if(scss) { %>
  gulp.watch('./app/sass/*.scss',['sass']);
  <% } %>
  <% if(ts) { %>
  gulp.watch('./app/sass/*.ts',['ts']);
  <% } %>
});

gulp.task('default',['live-reload']);