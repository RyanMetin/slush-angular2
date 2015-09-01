var fs = require('fs'),
	ini = require('ini'),
	join = require('path').join,
	resolve = require('path').resolve;

var envCfg = (function() {
	var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE, gitUser = {},
		configFile = join(home, '.gitconfig');
		gitUser = ini.parse(fs.readFileSync(configFile, 'utf-8')).user;
		
	return {
		authorName: gitUser.name || '',
		autherEmail: gitUser.email || ''
	};
})();

var boilerPrompt = [
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
		default: envCfg.authorName
	}, {
		type: 'input',
		message: 'Your email:',
		name: 'authorEmail',
		default: envCfg.authorEmail
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
];