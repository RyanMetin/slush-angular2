var gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    fs = require('fs'),
    ini = require('ini'),
    install = require('gulp-install'),
    inquirer = require('inquirer'),
    path = require('path'),
    rename = require('gulp-rename'),
    template = require('gulp-template');

var config = ini.parse(fs.readFileSync(process.env.HOME + '/.gitconfig', 'utf-8'));

gulp.task('default', function (cb) {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Name your project:',
      name: 'name',
      default: 'slushy',
      validate: function (input) {
        if (!input) {
          return 'Seriously, name your project:';
        } else {
          return true;
        }
      }
    }, {
      type: 'list',
      message: 'Choose a scaffold:',
      name: 'scaffold',
      choices: ['basic', 'boiler'],
      default: 'boiler'
    }, {
      type: 'list',
      message: 'Choose an ECMAScript standard:',
      name: 'spec',
      choices: ['es5', 'es6'],
      default: 'es6'
    }, {
      type: 'confirm',
      message: 'Use TypeScript?',
      name: 'ts',
      default: true
    }, {
      type: 'confirm',
      message: 'Everything look good?',
      name: 'good'
    }
  ],
  function (answers) {
    if (!answers.good) {
      return cb();
    }
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