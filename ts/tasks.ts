///<reference path="typings/tsd.d.ts"/>
import gulp = require('gulp');
import fs = require('fs');
import path = require('path');
let conflict = require('gulp-conflict'),
	install = require('gulp-install'),
	inquirer = require('inquirer'),
	rename = require('gulp-rename'),
	template = require('gulp-template');

import {Util} from './util.ts';

gulp.task('default', cb => {
	inquirer.prompt([
		Util.promptFn.nameIt('project', 'slushy'), 
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
		Util.promptFn.nameIt('component'),
		Util.promptFn.intOrExt('css'), 
		Util.promptFn.intOrExt('html'),
		Util.promptFn.imports('core'),
		Util.promptFn.imports('form'),
		Util.promptFn.imports('http'),
		Util.promptFn.imports('router'),
		Util.promptFn.confirmIt('component')
	], answers => {
		if (!answers.good) { return cb(); }
		gulp.src(path.join(__dirname, 'templates/options/component'))
			.pipe(template(answers))
			.pipe(rename(file => { file.basename = answers.component; }))
			.pipe(conflict(process.cwd(), 'src/', answers.component))
			.pipe(gulp.dest(path.join(process.cwd(), 'answers')))
			.on('finish', () => { cb(); }).resume();
	});
});

gulp.task('directive', cb => {
	Util.checkDir(cb);
	inquirer.prompt([
		Util.promptFn.nameIt('directive'),
		Util.promptFn.imports('core'),
		Util.promptFn.confirmIt('directive')
	], answers => {
		if (!answers.good) { return cb(); }
		gulp.src(path.join(__dirname, 'templates/options/directive'))
			.pipe(template(answers))
			.pipe(rename(file => { file.basename = answers.directive; }))
			.pipe(conflict(process.cwd(), 'src/', answers.directive))
			.pipe(gulp.dest(path.join(process.cwd(), 'answers')))
			.on('finish', () => { cb(); }).resume();
	});
});

gulp.task('pipe', cb => {
	Util.checkDir(cb);
	inquirer.prompt([
		Util.promptFn.nameIt('pipe'),
		Util.promptFn.confirmIt('pipe')
	], answers => {
		if (!answers.good) { return cb(); }
		gulp.src(path.join(__dirname, 'templates/options/pipe'))
			.pipe(template(answers))
			.pipe(rename(file => { file.basename = answers.pipe; }))
			.pipe(conflict(process.cwd(), 'src/shared', answers.pipe))
			.pipe(gulp.dest(path.join(process.cwd(), 'answers')))
			.on('finish', () => { cb(); }).resume();
	});
});

gulp.task('service', cb => {
	Util.checkDir(cb);
	inquirer.prompt([
		Util.promptFn.nameIt('service'),
		Util.promptFn.confirmIt('service')
	], answers => {
		if (!answers.good) { return cb(); }
		gulp.src(path.join(__dirname, 'templates/options/service'))
			.pipe(template(answers))
			.pipe(rename(file => { file.basename = answers.service; }))
			.pipe(conflict(process.cwd(), 'src/shared', answers.service))
			.pipe(gulp.dest(path.join(process.cwd(), 'answers')))
			.on('finish', () => { cb(); }).resume();
	});
});