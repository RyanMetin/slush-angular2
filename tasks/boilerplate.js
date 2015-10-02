module.export = function(cb) {
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
};