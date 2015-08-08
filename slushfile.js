var gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    fs = require('fs'),
    ini = require('ini'),
    install = require('gulp-install'),
    inquirer = require('inquirer'),
    path = require('path'),
    rename = require('gulp-rename'),
    template = require('gulp-template');

var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
  configFile = path.join(home, '.gitconfig'),
  user = ini.parse(fs.readFileSync(configFile, 'utf-8')).user;

gulp.task('default', function (cb) {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Name your project:',
      name: 'name',
      default: 'slushy',
      validate: function (input) {
        return /\w/g.test(input) || 'Seriously, name your project:';
      }
    }, {
      type: 'list',
      message: 'Choose your script:',
      name: 'script',
      choices: [{
        name: 'ECMAScript 5',
        value: 'es5'
      }, {
        name: 'ECMAScript 6',
        value: 'es6'
      }, {
        name: 'TypeScript',
        value: 'ts'
      }],
      default: 2
    }, {
      type: 'confirm',
      message: 'Include boilerplate?',
      name: 'boiler',
      default: true
    }, {
      type: 'input',
      message: 'Your name:',
      name: 'authorName',
      default: user.authorName,
      when: function (answers) {
        return answers.boiler;
      }
    }, {
      type: 'input',
      message: 'Your email:',
      name: 'authorEmail',
      default: user.authorEmail,
      when: function (answers) {
        return answers.boiler;
      }
    }, {
      type: 'confirm',
      message: 'Everything look good?',
      name: 'good',
      default: true
    }
  ],
  function (answers) {
    if (!answers.good) {
      return cb();
    }
    answers.slug = slugify(answers.name);
    answers.camel = camelize(answers.name);
    path.resolve(process.cwd(), answers.slug);
    
    var scaffold = [
      path.join(__dirname, 'templates/common/**'),
      path.join(__dirname, 'templates/' + answers.script + '/**')
    ];
    if (answers.boiler) {
      scaffold.push(path.join(__dirname, 'templates/boilerplate/**'));
    }
    
    gulp.src(scaffold)
      .pipe(template(answers))
      .pipe(rename(function (file) {
        if (file.basename[0] === '_' && file.extname !== '.scss') {
          file.basename = '.' + file.basename.slice(1);
        }
      }))
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