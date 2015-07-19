var gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    install = require('gulp-install'),
    inquirer = require('inquirer'),
    path = require('path'),
    template = require('gulp-template');

gulp.task('default', function (cb) {
  inquirer.prompt([
    {
      type: 'input', 
      name: 'name', 
      message: 'Name Your App:', 
      default: 'Angular2 Slushy'
    }
  ],
  function (answers) {
    answers.slug = slugify(answers.name);
    answers.camel = camelize(answers.name);
    path.resolve(process.cwd(), answers.slug);
    gulp.src(__dirname + '/templates/typescript/**')
      .pipe(template(answers))
      .pipe(conflict(path.join(process.cwd(), answers.slug)))
      .pipe(gulp.dest(path.join(process.cwd(), answers.slug)))
      .pipe(install())
      .on('finish', function () {
        cb();
      }).resume();
  });
});
 
function slugify (str) {
 str = str.toString().trim();
 return str.toLowerCase().replace(/\s/g, '-');
}

function camelize (str) {
 str = str.toString().trim();
 return str.charAt(0).toLowerCase() + str.slice(1).replace(/[-_\s]+(.)?/g, function(m, c) { return c ? c.toUpperCase() : ''; });
}