const ng2API = {
  animation: ['Animation', 'AnimationBuilder', 'BrowserDetails', 'CssAnimationBuilder', 'CssAnimationOptions'],
  common: ['COMMON_DIRECTIVES', 'COMMON_PIPES', 'CORE_DIRECTIVES', 'FORM_DIRECTIVES', 'FORM_PROVIDERS', 'FormBuilder', 'Validators'],
	core: ['APP_COMPONENT', 'APP_ID', 'Attribute', 'bind', 'enableProdMode', 'EventEmitter', 'Host', 'HostListener', 'Inject', 'Input', 'Optional', 'Output', 'Pipe', 'platform', 'PLATFORM_DIRECTIVES', 'PLATFORM_PIPES', 'provide', 'Provider', 'Query'],
	http: ['Headers', 'Http', 'HTTP_PROVIDERS', 'JSON_PROVIDERS', 'Jsonp', 'Response', 'Request'],
	router: ['CanActivate', 'Location', 'Redirect', 'RouteConfig', 'RouteDefinition', 'RouteParams', 'RouteRegistry', 'Router', 'ROUTER_DIRECTIVES', 'ROUTER_PROVIDERS']
};

var Util = {
	camelize (str: string): string {
		return str.charAt(0).toLowerCase() + str.slice(1).replace(/[-_\s]+(.)?/g, function(m, c) { return c ? c.toUpperCase() : ''; });
	},
	classable (str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	},
	selectable (ans: string, str: string): string {
		if (ans == 'element') {
			return str;
		} else if (ans == 'attribute') {
			return '['.concat(str, ']');
		} else if (ans == 'class') {
			return '.' + str;
		}
	},
	slugify (str: string): string {
		return str.toLowerCase().replace(/\s/g, '-');
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
		importIt (str: string) {
			return {
				type: 'checkbox',
				message: 'Imports from ' + str + ':',
				name: str,
				choices: ng2API[str],
				paginated: true
			};
		},
		intOrExt (str: string) {
			return {
				type: 'list',
				message: 'Inline or external ' + str + '?',
				name: str,
				choices: ['inline', 'external'],
				default: 0
			};
		},
		selectIt (index: number) {
			return {
				type: 'list',
				message: 'Selector type:',
				name: 'selector',
				choices: ['attribute', 'class', 'element'],
				default: index
			};
		}
	}
}