/// <reference path="typings/tsd.d.ts" />
System.config({
	baseURL: '/',
	defaultJSExtensions: true,
	map: {
		
	},
	paths: {
		'*': '*.js',
		'angular2/*': 'lib/angular2.js',
		'traceur-runtime': 'lib/traceur-runtime.js'
	}
});

System.import('boot');