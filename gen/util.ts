const ng2API = {
	core: ['CORE_DIRECTIVES', 'DEFAULT_PIPES', 'Attribute', 'EventEmitter', 'Host', 'HostBinding', 'HostListener', 'Inject', 'Input', 'Optional', 'Output', 'Query'], 
	form: ['FORM_DIRECTIVES', 'FORM_PROVIDERS', 'FormBuilder', 'Validators'],
	http: ['HTTP_PROVIDERS', 'JSON_PROVIDERS', 'Http', 'Jsonp'],
	router: ['ROUTER_DIRECTIVES', 'ROUTER_PROVIDERS', 'RouteConfig', 'CanActivate', 'Location']
};

var Util = {
	camelize (str: string): string {
		return str.charAt(0).toLowerCase() + str.slice(1).replace(/[-_\s]+(.)?/g, function(m, c) { return c ? c.toUpperCase() : ''; });
	},
	slugify (str: string): string {
		return str.toLowerCase().replace(/\s/g, '-');
	},
	classy (str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	},
	checkDir (cb) {
		try {
			require(path.join(process.cwd(), 'package.json'));
		} catch (e) {
			console.log('Run task in root dir of project.');
			return cb();
		}
	},
	promptFn: {
		nameIt (str: string, def?: string) {
			return {
				type: 'input',
				message: 'Name your ' + str + ':',
				name: str,
				validate: (input) => { return /\w/g.test(input) || 'Seriously, name it:'; },
				filter: (input) => { return input.toString().trim(); },
				default: def
			};
		},
		confirmIt (str: string) {
			return {
				type: 'confirm',
				message: (input) => { return 'Create ' + str + ' ' + input[str] + '?'; },
				name: 'good',
				default: true
			};
		},
		intOrExt (str: string) {
			return {
				type: 'list',
				message: 'Inline or external ' + str + '?',
				name: str,
				choices: ['Inline', 'External'],
				default: 0
			};
		},
		imports (str: string) {
			return {
				type: 'checkbox',
				message: 'Imports from ' + str + ':',
				name: str + 'Imports',
				choices: ng2API[str],
				paginated: true
			};
		}
	}
}