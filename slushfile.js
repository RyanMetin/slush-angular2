var gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    install = require('gulp-install'),
    rename = require('gulp-rename'),
    template = require('gulp-template'),
    inquirer = require('inquirer'),
    _ = require('underscore.string');

gulp.task('default', function (done) {
  inquirer.prompt([
    {type: 'input', name: 'name', message: 'What should your app be named?', default: getName()},
    {type: 'confirm', name: 'sass', message: 'Should it use Sass?', default: false},
    {type: 'confirm', name: 'ts', message: 'Should it use TypeScript?', default: false}
  ],
  function (answers) {
    answers.slug = _.slugify(answers.name);
    answers.camel = _.camelize(answers.slug);
    var files = [__dirname + '/templates/**'];
    answers.ts ? files.push('!' + __dirname + '/templates/app/**/*.js') : files.push('!' + __dirname + '/templates/app/**/*.ts')
    answers.sass ? files.push('!' + __dirname + '/templates/app/content/sass/*.css') : files.push('!' + __dirname + '/templates/app/content/css/*.scss')
    return gulp.src(files)
      .pipe(template(answers))
      .pipe(rename(function (file) {
        if (file.basename[0] === '_') {
          file.basename = '.' + file.basename.slice(1);
        }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('finish', function () {
        done();
      });
  });
});

function getName() {
  var path = require('path');
  try {
    return require(path.join(process.cwd(),'package.json')).name;
  } catch (e) {
    return path.basename(process.cwd());
  }
}