var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    config = {
      basePath: './app',
      port: 5050
    };

gulp.task('live-reload',function(){
  livereload.listen(config);
});

gulp.task('default',['live-reload']);