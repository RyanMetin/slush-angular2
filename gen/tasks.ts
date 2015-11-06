///<reference path="typings/tsd.d.ts"/>
let conflict = require('gulp-conflict'),
	gulp = require('gulp'),
	fs = require('fs'),
	install = require('gulp-install'),
	inquirer = require('inquirer'),
	path = require('path'),
	rename = require('gulp-rename'),
	template = require('gulp-template');

gulp.task('default', cb => {
	inquirer.prompt([
		Util.promptFn.nameIt('project', (gulp.args > 0) ? gulp.args : 'slushy'), 
		Util.promptFn.confirmIt('project')
	], answers => {
		if (!answers.good) { return cb(); }
		answers.camel = Util.camelize(answers.project);
		answers.slug = Util.slugify(answers.project);
		path.resolve(process.cwd(), answers.slug);
		gulp.src(path.join(__dirname, 'templates/app/**'))
			.pipe(template(answers))
			.pipe(rename(file => {
				if (file.basename[0] === '_' && file.extname !== '.scss') {
					file.basename = '.' + file.basename.slice(1);
				}
			}))
			.pipe(conflict(path.join(process.cwd(), answers.slug)))
			.pipe(gulp.dest(path.join(process.cwd(), answers.slug)))
			.pipe(install())
			.on('finish', () => { cb(); }).resume();
	});
});

gulp.task('component', cb => {
	Util.checkDir(cb);
	inquirer.prompt([
		Util.promptFn.nameIt('component', gulp.args),
		// Util.promptFn.intOrExt('css'), 
		// Util.promptFn.intOrExt('html'),
		Util.promptFn.imports('core'),
		Util.promptFn.imports('form'),
		Util.promptFn.imports('http'),
		Util.promptFn.imports('router'),
		Util.promptFn.confirmIt('component')
	], answers => {
		if (!answers.good) { return cb(); }
		answers.camel = Util.camelize(answers.component);
		answers.mod = Util.classy(answers.camel);
		answers.slug = Util.slugify(answers.component);
		gulp.src(path.join(__dirname, 'templates/options/component/component.ts'))
			.pipe(template(answers))
			.pipe(rename(file => { file.basename = answers.camel; }))
			.pipe(conflict(path.join(process.cwd(), 'src/component')))
			.pipe(gulp.dest(path.join(process.cwd(), 'src/component')))
			.on('finish', () => { cb(); }).resume();
	});
});

gulp.task('directive', cb => {
	Util.checkDir(cb);
	inquirer.prompt([
		Util.promptFn.nameIt('directive', gulp.args),
		Util.promptFn.imports('core'),
		Util.promptFn.confirmIt('directive')
	], answers => {
		if (!answers.good) { return cb(); }
		answers.camel = Util.camelize(answers.directive);
		answers.mod = Util.classy(answers.camel);
		answers.slug = Util.slugify(answers.directive);
		gulp.src(path.join(__dirname, 'templates/options/directive/directive.ts'))
			.pipe(template(answers))
			.pipe(rename(file => { file.basename = answers.camel; }))
			.pipe(conflict(path.join(process.cwd(), 'src/directive')))
			.pipe(gulp.dest(path.join(process.cwd(), 'src/directive')))
			.on('finish', () => { cb(); }).resume();
	});
});

gulp.task('pipe', cb => {
	Util.checkDir(cb);
	inquirer.prompt([
		Util.promptFn.nameIt('pipe', gulp.args),
		Util.promptFn.confirmIt('pipe')
	], answers => {
		if (!answers.good) { return cb(); }
		answers.camel = Util.camelize(answers.pipe);
		answers.mod = Util.classy(answers.camel);
		answers.slug = Util.slugify(answers.pipe);
		gulp.src(path.join(__dirname, 'templates/options/pipe/pipe.ts'))
			.pipe(template(answers))
			.pipe(rename(file => { file.basename = answers.camel; }))
			.pipe(conflict(path.join(process.cwd(), 'src/shared')))
			.pipe(gulp.dest(path.join(process.cwd(), 'src/shared')))
			.on('finish', () => { cb(); }).resume();
	});
});

gulp.task('service', cb => {
	Util.checkDir(cb);
	inquirer.prompt([
		Util.promptFn.nameIt('service', gulp.args),
		Util.promptFn.confirmIt('service')
	], answers => {
		if (!answers.good) { return cb(); }
		answers.camel = Util.camelize(answers.service);
		answers.mod = Util.classy(answers.camel);
		gulp.src(path.join(__dirname, 'templates/options/service/service.ts'))
			.pipe(template(answers))
			.pipe(rename(file => { file.basename = answers.camel; }))
			.pipe(conflict(path.join(process.cwd(), 'src/shared')))
			.pipe(gulp.dest(path.join(process.cwd(), 'src/shared')))
			.on('finish', () => { cb(); }).resume();
	});
});