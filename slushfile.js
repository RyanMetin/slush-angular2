var gulp = require('gulp'),
	conflict = require('gulp-conflict'),
	fs = require('fs'),
	ini = require('ini'),
	install = require('gulp-install'),
	inquirer = require('inquirer'),
	join = require('path').join,
	rename = require('gulp-rename'),
	resolve = require('path').resolve,
	template = require('gulp-template'),
	boilerCfg = (function() {
		var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
  		configFile = join(home, '.gitconfig'),
  		user = ini.parse(fs.readFileSync(configFile, 'utf-8')).user;
			
		return {
			authorName: user.name || '',
			autherEmail: user.email || ''
		};
	})();
	
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

gulp.task('boilerplate', function(cb) {
	inquirer.prompt([
		{
			type: 'input',
			message: 'Project name:',
			name: 'appName',
			default: 'slushy'
		}, {
			type: 'input',
      message: 'Your name:',
      name: 'authorName',
      when: function (answers) {
        return answers.boiler;
      },
      default: boilerCfg.authorName
    }, {
      type: 'input',
      message: 'Your email:',
      name: 'authorEmail',
      default: boilerCfg.authorEmail
		}, {
			type: 'input',
			message: 'Your GitHub user name:',
			name: 'userName'
		}, {
			type: 'list',
			message: 'Choose an OSS license:',
			name: 'license',
			choices: ['Apache', 'MIT', 'GPL']
		}, {
			type: 'confirm',
			message: 'Everything look good?',
			name: 'good',
			default: true
		}
	], function (answers) {
		if(!answers.good) {
			return cb();
		}
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