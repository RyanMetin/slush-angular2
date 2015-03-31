slush-angular2
==============

![](http://thevelourfog.github.io/src/content/svg/shield.svg)

Slush generator to get started with the Angular2 Alpha Preview.

Scaffold has an example component with a decorator, service and template. Mouse over the header and check it out.

It uses the [angular/quickstart](https://github.com/angular/quickstart) repo to build the dependencies needed:
- [Angular2](https://www.npmjs.com/package/angular2): The current Alpha Preview pre-built in ES5.
- [rtts-assert](https://www.npmjs.com/package/rtts_assert): The run-time type assertion library pre-built in ES5.
- The es6-shim, which provides:
	- [Traceur](https://www.npmjs.com/package/traceur): Compiles ES6 to ES5 and uses rtts_assert to transpile TypeScript at run-time.
	- [ES6 Module Loader](https://www.npmjs.com/package/es6-module-loader): A polyfill for asynchronous module loading.
	- [systemjs](https://www.npmjs.com/package/systemjs): Works with the es6-module-loader to dynamically load any module format.
	- [zonejs](https://www.npmjs.com/package/zone.js): BTFord's Zone implementation for controlling the execution of asynchronous calls.

## Installation

Install `slush-angular2` globally (must have slush installed globally):

```bash
npm install -g slush-angular2
```

## Usage

Run the generator and name your project when prompted (default = 'Angular2 Demo'):

```bash
slush angular2
```

## Development

From within your new project directory run:

```bash
npm start
```

### Now you're ready to get Angular... 2!

![](http://i.imgur.com/85O2cvX.gif)

## Structure
- content/
- lib/
	- angular2 dependencies
- src/
	- index.html
	- app/
		- config.js # configuration for system paths and import
		- index.js # main app and bootstrap
		- starter/
			- component.js # component directive
			- decorator.js # decorator directive
			- service.js # injectable service
			- template.html # component template

#### CSS Preprocessors
Soon.

#### JS Supersets
Soon. 

### Test

Not ready.

### Production

Not ready.

## Contribute

This is my first published package, so contributions are very welcome. There are no guidelines for contributing. If you find a problem or have a suggestion go ahead and [submit an issue](https://github.com/thevelourfog/slush-angular2/issues).

## License

[MIT](https://github.com/thevelourfog/slush-angular2/blob/master/LICENSE)