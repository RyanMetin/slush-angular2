var gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    install = require('gulp-install'),
    inquirer = require('inquirer'),
    path = require('path'),
    template = require('gulp-template'),
    _ = require('underscore.string');

gulp.task('default', function (cb) {
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'Name your project:', default: 'Angular2 Demo'}
  ],
  function (answers) {
    answers.slug = _.slugify(answers.name);
    answers.camel = _.camelize(answers.slug);
    path.resolve(process.cwd(), answers.slug);
    return gulp.src(__dirname + '/templates/**')
      .pipe(template(answers))
      .pipe(conflict(path.join(process.cwd(), answers.slug)))
      .pipe(gulp.dest(path.join(process.cwd(), answers.slug)))
      .pipe(install())
      .on('finish', function () {
        cb();
      }).resume();
  });
});
