var conflict = require('gulp-conflict'), gulp = require('gulp'), fs = require('fs'), install = require('gulp-install'), inquirer = require('inquirer'), path = require('path'), rename = require('gulp-rename'), template = require('gulp-template');
gulp.task('default', function (cb) {
    inquirer.prompt([
        Util.promptFn.nameIt('project', (gulp.args.length > 0) ? gulp.args : 'slushy'),
        Util.promptFn.confirmIt('project')
    ], function (answers) {
        if (!answers.good) {
            return cb();
        }
        answers.camel = Util.camelize(answers.project);
        answers.slug = Util.slugify(answers.project);
        path.resolve(process.cwd(), answers.slug);
        gulp.src(path.join(__dirname, 'templates/app/**'))
            .pipe(template(answers))
            .pipe(rename(function (file) {
            if (file.basename[0] === '_' && file.extname !== '.scss') {
                file.basename = '.' + file.basename.slice(1);
            }
        }))
            .pipe(conflict(path.join(process.cwd(), answers.slug)))
            .pipe(gulp.dest(path.join(process.cwd(), answers.slug)))
            .pipe(install())
            .on('finish', function () { cb(); }).resume();
    });
});
gulp.task('component', function (cb) {
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
    ], function (answers) {
        if (!answers.good) {
            return cb();
        }
        answers.camel = Util.camelize(answers.component);
        answers.mod = Util.classy(answers.camel);
        answers.slug = Util.slugify(answers.component);
        gulp.src(path.join(__dirname, 'templates/options/component/component.ts'))
            .pipe(template(answers))
            .pipe(rename(function (file) { file.basename = answers.camel; }))
            .pipe(conflict(path.join(process.cwd(), 'src/component')))
            .pipe(gulp.dest(path.join(process.cwd(), 'src/component')))
            .on('finish', function () { cb(); }).resume();
    });
});
gulp.task('directive', function (cb) {
    Util.checkDir(cb);
    inquirer.prompt([
        Util.promptFn.nameIt('directive', gulp.args),
        Util.promptFn.imports('core'),
        Util.promptFn.confirmIt('directive')
    ], function (answers) {
        if (!answers.good) {
            return cb();
        }
        answers.camel = Util.camelize(answers.directive);
        answers.mod = Util.classy(answers.camel);
        answers.slug = Util.slugify(answers.directive);
        gulp.src(path.join(__dirname, 'templates/options/directive/directive.ts'))
            .pipe(template(answers))
            .pipe(rename(function (file) { file.basename = answers.camel; }))
            .pipe(conflict(path.join(process.cwd(), 'src/directive')))
            .pipe(gulp.dest(path.join(process.cwd(), 'src/directive')))
            .on('finish', function () { cb(); }).resume();
    });
});
gulp.task('pipe', function (cb) {
    Util.checkDir(cb);
    inquirer.prompt([
        Util.promptFn.nameIt('pipe', gulp.args),
        Util.promptFn.confirmIt('pipe')
    ], function (answers) {
        if (!answers.good) {
            return cb();
        }
        answers.camel = Util.camelize(answers.pipe);
        answers.mod = Util.classy(answers.camel);
        answers.slug = Util.slugify(answers.pipe);
        gulp.src(path.join(__dirname, 'templates/options/pipe/pipe.ts'))
            .pipe(template(answers))
            .pipe(rename(function (file) { file.basename = answers.camel; }))
            .pipe(conflict(path.join(process.cwd(), 'src/shared')))
            .pipe(gulp.dest(path.join(process.cwd(), 'src/shared')))
            .on('finish', function () { cb(); }).resume();
    });
});
gulp.task('service', function (cb) {
    Util.checkDir(cb);
    inquirer.prompt([
        Util.promptFn.nameIt('service', gulp.args),
        Util.promptFn.confirmIt('service')
    ], function (answers) {
        if (!answers.good) {
            return cb();
        }
        answers.camel = Util.camelize(answers.service);
        answers.mod = Util.classy(answers.camel);
        gulp.src(path.join(__dirname, 'templates/options/service/service.ts'))
            .pipe(template(answers))
            .pipe(rename(function (file) { file.basename = answers.camel; }))
            .pipe(conflict(path.join(process.cwd(), 'src/shared')))
            .pipe(gulp.dest(path.join(process.cwd(), 'src/shared')))
            .on('finish', function () { cb(); }).resume();
    });
});
var ng2API = {
    core: ['CORE_DIRECTIVES', 'DEFAULT_PIPES', 'Attribute', 'EventEmitter', 'Host', 'HostBinding', 'HostListener', 'Inject', 'Input', 'Optional', 'Output', 'Query'],
    form: ['FORM_DIRECTIVES', 'FORM_PROVIDERS', 'FormBuilder', 'Validators'],
    http: ['HTTP_PROVIDERS', 'JSON_PROVIDERS', 'Http', 'Jsonp'],
    router: ['ROUTER_DIRECTIVES', 'ROUTER_PROVIDERS', 'RouteConfig', 'CanActivate', 'Location']
};
var Util = {
    camelize: function (str) {
        return str.charAt(0).toLowerCase() + str.slice(1).replace(/[-_\s]+(.)?/g, function (m, c) { return c ? c.toUpperCase() : ''; });
    },
    slugify: function (str) {
        return str.toLowerCase().replace(/\s/g, '-');
    },
    classy: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    checkDir: function (cb) {
        try {
            require(path.join(process.cwd(), 'package.json'));
        }
        catch (e) {
            console.log('Run task in root dir of project.');
            return cb();
        }
    },
    promptFn: {
        nameIt: function (str, def) {
            return {
                type: 'input',
                message: 'Name your ' + str + ':',
                name: str,
                validate: function (input) { return /\w/g.test(input) || 'Seriously, name it:'; },
                filter: function (input) { return input.toString().trim(); },
                default: def
            };
        },
        confirmIt: function (str) {
            return {
                type: 'confirm',
                message: function (input) { return 'Create ' + str + ' ' + input[str] + '?'; },
                name: 'good',
                default: true
            };
        },
        intOrExt: function (str) {
            return {
                type: 'list',
                message: 'Inline or external ' + str + '?',
                name: str,
                choices: ['Inline', 'External'],
                default: 0
            };
        },
        imports: function (str) {
            return {
                type: 'checkbox',
                message: 'Imports from ' + str + ':',
                name: str + 'Imports',
                choices: ng2API[str],
                paginated: true
            };
        }
    }
};
