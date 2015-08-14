/// <reference path="../typings/tsd.d.ts" />
System.config({
	baseURL: '/',
	defaultJSExtensions: true,
	map: {
		
	},
	paths: {
		'*': '*.js',
		'traceur-runtime': 'lib/traceur-runtime',
		'angular2/*': 'lib/angular2'
	}
});

System.import('boot').catch(console.error.bind(console));