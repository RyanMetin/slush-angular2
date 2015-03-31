var gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    install = require('gulp-install'),
    rename = require('gulp-rename'),
    template = require('gulp-template'),
    spawn = require('child_process').spawn,
    inquirer = require('inquirer'),
    path = require('path'),
    _ = require('underscore.string'),
    files = [];

gulp.task('default', function (done) {
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'What should your project be named?', default: 'Angular2 Demo'}
  ],
  function (answers) {
    answers.slug = _.slugify(answers.name);
    answers.camel = _.camelize(answers.slug);
    path.resolve(process.cwd(), answers.slug);
    files.push(__dirname + '/templates/**');
    files.push('!' + __dirname + '/templates/src/*.js');
    files.push('!' + __dirname + '/templates/src/*.css');
    return gulp.src(files)
      .pipe(template(answers))
      .pipe(rename(function (file) { if (file.basename[0] === '_') { file.basename = '.' + file.basename.slice(1); }}))
      .pipe(conflict(path.join(process.cwd(), answers.slug)))
      .pipe(gulp.dest(path.join(process.cwd(), answers.slug)))
      .pipe(install())
      .on('finish', function () {
        done();
      });
  });
});
