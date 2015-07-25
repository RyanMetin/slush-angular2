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
      message: 'Choose a scaffold:',
      name: 'scaffold',
      choices: ['minimal', 'basic', 'boiler'],
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
      default: true,
      when: function (answers) {
        return answers.spec === 'es6';
      }
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
    
    var scaffold = [
      path.join(__dirname, 'templates/src/**')
    ];
    if (answers.scaffold == 'boiler') {
      scaffold.push(path.join(__dirname, 'templates/boiler/**'));
    }
    if (answers.ts) {
      scaffold.push(path.join(__dirname, 'templates/ts/**'));
      return answers.script = 'ts';
    } else {
      return answers.script = 'js';
    }
    
    gulp.src(scaffold)
      .pipe(template(answers))
      .pipe(rename(function (file) {
        if (file.basename[0] === '_' && file.extname !== '.scss') {
          file.basename = '.' + file.basename.slice(1);
        }
        if (file.extname === '.ts') {
          file.extname = '.' + answers.script;
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