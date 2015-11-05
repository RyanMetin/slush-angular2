export module Util {
	export function camelize (str: string): string {
		return str.toLowerCase().replace(/\s/g, '-');
	}
	
	export function slugify (str: string): string {
		return str.charAt(0).toLowerCase() + str.slice(1).replace(/[-_\s]+(.)?/g, function(m, c) { return c ? c.toUpperCase() : ''; });
	}
	
	export function checkDir () {
		try {
			let pkg = require(path.join(process.cwd(), 'package.json'));
		} catch (e) {
			console.log('Task must be run in root dir of project.');
			return cb();
		}
	}
}