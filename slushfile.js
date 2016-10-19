var gulp = require('gulp'),
  aside = require('gulp-aside'),
  conflict = require('gulp-conflict'),
  install = require('gulp-install'),
  template = require('gulp-template'),
  inquirer = require('inquirer'),
  path = require('path');

gulp.task('default', function (cb) {
	inquirer.prompt([
    {
      type: 'input',
      message: 'Name your project:',
      name: 'project',
      validate: function (input) { return /\w/g.test(input) || 'Seriously, name it:'; },
      filter: function (input) { return input.toString().trim(); },
      default: 'slushy' || gulp.args
    }, {
      type: 'confirm',
      message: function (input) { return 'Create project ' + input['project'] + '?'; },
      name: 'good',
      default: true
    }
	]).then(function (answers) {
		if (!answers.good) { return cb(); }
		answers.slug = slugify(answers.project);
		answers.camel = camelize(answers.project);
		gulp.src(path.join(__dirname, 'templates/app/**'))
      .pipe(aside('!**/*.{ico,png}', template(answers)))
			.pipe(conflict(path.join(process.cwd(), answers.slug)))
			.pipe(gulp.dest(path.join(process.cwd(), answers.slug)))
			.pipe(install())
			.on('end', function () { cb(); }).resume();
	});
});
function camelize (str) {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/[-_\s]+(.)?/g, function(m, c) { return c ? c.toUpperCase() : ''; });
}
function classable (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function slugify (str) {
  return str.toLowerCase().replace(/\s/g, '-');
}