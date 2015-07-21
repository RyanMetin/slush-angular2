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
      message: 'Name your project:',
      name: 'name', 
      validate: function (answer) {
        if (!answer) {
          return 'Seriously, name your project:';
        } else {
          return true;
        }
      }
    }, {
      type: 'list',
      message: 'Choose your scaffold:',
      name: 'scaffold',
      choices: ['basic', 'boiler'],
      default: 'boiler'
    }, {
      type: 'list',
      message: 'Choose your script:',
      name: 'syntax',
      choices: ['es5', 'es6'],
      default: 'es6'
    }, {
      type: 'confirm',
      message: 'Use TypeScript?',
      name: 'ts',
      default: true
    }
  ],
  function (answers) {
    answers.slug = slugify(answers.name);
    answers.camel = camelize(answers.name);
    path.resolve(process.cwd(), answers.slug);
    gulp.src(__dirname + '/templates/' + answers.scaffold + '/**')
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