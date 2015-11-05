let inquirer = require('inquirer'),
	path = require('path'),
	ng2API = {
	core: ['CORE_DIRECTIVES', 'DEFAULT_PIPES', new inquirer.Seperator('Annotations:'), 'Attribute', 'EventEmitter', 'Host', 'HostBinding', 'HostListener', 'Inject', 'Input', 'Optional', 'Output', 'Query'], 
	form: ['FORM_DIRECTIVES', 'FORM_PROVIDERS', 'FormBuilder', 'Validators'],
	http: ['HTTP_PROVIDERS', 'Http', 'JSON_PROVIDERS', 'Jsonp'],
	router: ['ROUTER_DIRECTIVES', 'ROUTER_PROVIDERS', 'RouteConfig', 'CanActivate', 'Location']
};

export module Util {
	export function camelize (str: string): string {
		return str.toLowerCase().replace(/\s/g, '-');
	}
	
	export function slugify (str: string): string {
		return str.charAt(0).toLowerCase() + str.slice(1).replace(/[-_\s]+(.)?/g, function(m, c) { return c ? c.toUpperCase() : ''; });
	}
	
	export function checkDir (cb) {
		try {
			require(path.join(process.cwd(), 'package.json'));
		} catch (e) {
			console.log('Run task in root dir of project.');
			return cb();
		}
	}
	
	export const promptFn = {
		nameIt (str: string, def?: string) {
			return {
				type: 'input',
				message: 'Name your' + str + ':',
				name: str,
				validate: (input) => { return /\w/g.test(input) || 'Seriously, name it:'; },
				filter: (input) => { return input.toString().trim(); },
				default: def
			};
		},
		confirmIt (str: string) {
			return {
				type: 'confirm',
				message: (input) => { return 'Create' + str + input[str] + '?'},
				name: 'good',
				default: true
			};
		},
		intOrExt (str: string) {
			return {
				type: 'list',
				message: 'Inline or external' + str + '?',
				name: str,
				choices: ['Inline', 'External'],
				default: 0
			};
		},
		imports (str: string) {
			return {
				type: 'checkbox',
				message: 'Imports from' + str + ':',
				name: str + 'Imports',
				choices: ng2API[str],
				paginated: true
			};
		}
	}
}