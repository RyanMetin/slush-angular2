var gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    install = require('gulp-install'),
    inquirer = require('inquirer'),
    path = require('path'),
    template = require('gulp-template'),
    _ = require('underscore.string');

gulp.task('default', function (cb) {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'name', 
      message: 'Name Your App:', 
      default: 'Angular2 Slushy'
    }, {
      type: 'list',
      name: 'build',
      message: 'Choose A Scaffold:',
      default: 1,
      choices: ['Traceur', 'TypeScript'],
      filter: function(val) {return val.toLowerCase();}
    }
  ],
  function (answers) {
    answers.slug = _.slugify(answers.name);
    answers.camel = _.camelize(answers.slug);
    path.resolve(process.cwd(), answers.slug);
    gulp.src(__dirname + '/templates/' + answers.build + '/**')
      .pipe(template(answers))
      .pipe(conflict(path.join(process.cwd(), answers.slug)))
      .pipe(gulp.dest(path.join(process.cwd(), answers.slug)))
      .pipe(install())
      .on('finish', function () {
        cb();
      }).resume();
  });
});
