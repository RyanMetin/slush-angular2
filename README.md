slush-angular2
==============

Get started with the Angular2 Preview:

What it uses:
- [angular2](https://www.npmjs.com/package/angular2)
- [es6-module-loader](https://www.npmjs.com/package/es6-module-loader)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [systemjs](https://www.npmjs.com/package/systemjs)
- [zone](https://www.npmjs.com/package/zone.js)
	
Build options:
- Use [jspm](https://jspm.io/) and [traceur](https://www.npmjs.com/package/traceur).
- [TypeScript](https://typescriptlang.org)!
- Or [Webpack](https://webpack.github.io) and [Babel](https://babeljs.io).

## Installation

Install `slush-angular2` globally (must have slush installed globally):

```bash
npm install -g slush-angular2
```

## Usage

Run the generator and answer its questions:

```bash
slush angular2
```

Now you've got everything you need to get started.

![](http://i.imgur.com/85O2cvX.gif)

## Development

From your new project directory run:

```bash
gulp src
```

## Production

Bundle your app and serve it with:

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

	- Get TypeScript working properly from JSPM.
	- More templates to scaffold from:
		- Webpack
		- TypeScript
	- Optional Sass. 

## Contribute

This is my first published package, so contributions are very welcome. There are no guidelines for contributing. If you find a problem or have a suggestion go ahead and [submit an issue](https://github.com/thevelourfog/slush-angular2/issues).

## License

[MIT](https://github.com/thevelourfog/slush-angular2/blob/master/LICENSE)
