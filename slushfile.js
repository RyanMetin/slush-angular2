var gulp = require('gulp'),
	conflict = require('gulp-conflict'),
	fs = require('fs'),
	install = require('gulp-install'),
	inquirer = require('inquirer'),
	join = require('path').join,
	rename = require('gulp-rename'),
	resolve = require('path').resolve,
	template = require('gulp-template');
	
gulp.task('default', function (cb) {
	inquirer.prompt([
		{
			type: 'input',
			message: 'Name your project:',
			name: 'appName',
			validate: function (input) {
				return /\w/g.test(input) || 'Seriously, name your project:';
			},
			default: 'slushy'
		}, {
			type: 'confirm',
			message: 'Everything look good?',
			name: 'good',
			default: true
		}
	], function (answers) {
		if (!answers.good) {
			return cb();
		}
		answers.slug = slugify(answers.appName);
		answers.camel = camelize(answers.appName);
		
		resolve(process.cwd(), answers.slug);
		
		var scaffold = [
			join(__dirname, 'templates/app/**')
		];
		
		gulp.src(scaffold)
			.pipe(template(answers))
			.pipe(rename(function (file) {
				if (file.basename[0] === '_' && file.extname !== '.scss') {
					file.basename = '.' + file.basename.slice(1);
				}
			}))
			.pipe(conflict(join(process.cwd(), answers.slug)))
			.pipe(gulp.dest(join(process.cwd(), answers.slug)))
			.pipe(install())
			.on('finish', function() {
				cb();
			}).resume();
	});
});

gulp.task('boilerplate', function (cb) {
	
});

gulp.task('component', function (cb) {
	
});

gulp.task('server', function (cb) {
	
});

gulp.task('service', function (cb) {
	
});
 
function slugify (str) {
 str = str.toString().trim();
 return str.toLowerCase().replace(/\s/g, '-');
}

function camelize (str) {
 str = str.toString().trim();
 return str.charAt(0).toLowerCase() + str.slice(1).replace(/[-_\s]+(.)?/g, function(m, c) { return c ? c.toUpperCase() : ''; });
}