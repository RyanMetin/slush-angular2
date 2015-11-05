let inquirer = require('inquirer'),
	api = {
	core: ['CORE_DIRECTIVES', 'DEFAULT_PIPES', new inquirer.Seperator('Annotations:'), 'Attribute', 'EventEmitter', 'Host', 'HostBinding', 'HostListener', 'Inject', 'Input', 'Optional', 'Output', 'Query'], 
	form: ['FORM_DIRECTIVES', 'FORM_PROVIDERS', 'FormBuilder', 'Validators'],
	http: ['HTTP_PROVIDERS', 'Http', 'JSON_PROVIDERS', 'Jsonp'],
	router: ['ROUTER_DIRECTIVES', 'ROUTER_PROVIDERS', 'RouteConfig', 'CanActivate', 'Location']
},
	opts = {
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
			choices: api[str],
			paginated: true
		};
	}
};

export const Prompts = {
	default: [
		opts.nameIt('project', 'slushy'), 
		opts.confirmIt('project')
	],
	component: [
		opts.nameIt('component'),
		opts.intOrExt('css'), 
		opts.intOrExt('html'),
		opts.imports('core'),
		opts.imports('form'),
		opts.imports('http'),
		opts.imports('router'),
		opts.confirmIt('component')
	],
	directive: [
		opts.nameIt('directive'),
		opts.imports('core'),
		opts.confirmIt('directive')
	],
	pipe: [
		opts.nameIt('pipe'),
		opts.confirmIt('pipe')
	],
	service: [
		opts.nameIt('service'),
		opts.confirmIt('service')
	]
};

