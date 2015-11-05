var gulp = require('gulp'),
	conflict = require('gulp-conflict'),
	fs = require('fs'),
	install = require('gulp-install'),
	inquirer = require('inquirer'),
	join = require('path').join,
	rename = require('gulp-rename'),
	resolve = require('path').resolve,
	template = require('gulp-template'),
	prompts = require('./tasks/prompts');
	
gulp.task('default', function (cb) {
	inquirer.prompt(prompts.default, function (answers) {
		if (!answers.good) { return cb(); }
		answers.slug = slugify(answers.project);
		answers.camel = camelize(answers.project);
		resolve(process.cwd(), answers.slug);
		var scaffold = [ join(__dirname, 'templates/app/**') ];
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
			.on('finish', function() { cb(); }).resume();
	});
});

gulp.task('boilerplate', function (cb) {
	var ini = require('ini'),
		boilerCfg = (function() {
		var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
		configFile = join(home, '.gitconfig'),
		user = ini.parse(fs.readFileSync(configFile, 'utf-8')).user;
		return {
			authorName: user.name || '',
			autherEmail: user.email || ''
		};
	})();
	inquirer.prompt(prompts.boilerplate, function (answers) {
		if(!answers.good) { return cb(); }
		gulp.src(join(__dirname, 'templates/options/boilerplate/**'))
			.pipe(template(answers))
			.pipe(rename(function (file) {
				if (file.basename[0] === '_') {
					file.basename = '.' + file.basename.slice(1);
				}
			}))
			.pipe(conflict(join(process.cwd(), answers.slug)))
			.pipe(gulp.dest(join(process.cwd(), answers.slug)))
			.on('finish', function() {
				cb();
			}).resume();
	});
});

gulp.task('component', function (cb) {
	inquirer.prompt(prompts.component, function (answers) {
		
	});
});

gulp.task('directive', function (cb) {
	inquirer.prompt(prompts.directive, function (answers) {
		
	});
});

gulp.task('pipe', function (cb) {
	inquirer.prompt(prompts.pipe, function (answers) {
		
	});
});

gulp.task('service', function (cb) {
	inquirer.prompt(prompts.service, function (answers) {
		
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