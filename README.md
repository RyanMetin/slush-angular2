[slush-angular2](https://www.npmjs.com/package/slush-angular2) [![Build Status](https://travis-ci.org/TheVelourFog/slush-angular2.svg?branch=master)](https://travis-ci.org/TheVelourFog/slush-angular2) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-angular2.png)](http://badges.enytc.com/for/npm/slush-angular2) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/TheVelourFog/slush-angular2/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
==============

Get started with the Angular2 Alpha:

Uses:
- [angular2](https://www.npmjs.com/package/angular2)
- [es6-module-loader](https://www.npmjs.com/package/es6-module-loader)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [systemjs](https://www.npmjs.com/package/systemjs)
- [typescript](https://typescriptlang.org)
- [zone](https://www.npmjs.com/package/zone.js)
	
Options:
- Scaffold: Basic or Boilerplate.
- Preprocessor: Sass

### Install It

```bash
npm i -g slush slush-angular2
```

### Generate It

Run the generator. Answer its questions.

```bash
slush angular2
```

Get coding in new project directory.

![](http://i.imgur.com/85O2cvX.gif)

### Develop It

Compile and run in browser with LiveReload.

```bash
gulp src
```

### Bundle It

Put all the script in one neat file and run in browser.

```bash
gulp dist
```

## Structure

	- src/
		- index.html
		- config.js # System configuration.
		- index.js # Bootstrap the example component.
		- example.js # A basic Angular2 component.
		- content/ # Browser assets.
		- ts/ # TypeScript files.
			- typings/ # TypeScript definitions.
	- dist/
		- bundle.js # Self-executing bundle of dependencies.
		- index.html
	- tsconfig.json # TypeScript configuration.

## To-do

	- Component generator in slush: Create script for a new Angular 2 component.

## Contribute

This is my first published package, so contributions are very welcome. There are no guidelines for contributing. If you find a problem or have a suggestion go ahead and [submit an issue](https://github.com/thevelourfog/slush-angular2/issues).

## License

[MIT](https://github.com/thevelourfog/slush-angular2/blob/master/LICENSE)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/TheVelourFog/slush-angular2/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

