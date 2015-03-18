slush-angular2
==============

A slush generator for Angular 2 Alpha Preview, using the angular/quickstart repository.

## Installation

Install `slush-angular2` globally (must have slush installed globally):

```bash
npm install -g slush-angular2
```

## Usage

Run the generator from within a new folder for your app:

```bash
mkdir angular2-app

cd angular2-app

slush angular2
```

You will be prompted to name your app, decide if your app will use Sass, and decide if it will use TypeScript.

## Structure

Includes a starter component and a starter service.

```
angular2-app/
├── .bowerrc
├── .editorconfig
├── .gitignore
├── gulpfile.js
├── package.json
├── README.md
└── app
	├── index.html
	├── index.js
	├── content
	│	├── css
	│   │	└── *.css
	│	├── sass
	│	│	└── *.scss
	│	├── img
	│   └── svg
	├── components
	│	└── starter
	│		├── starter.html
	│		└── starter.js
	├── services
	│	└── starter
	│		└── starter-svc.js
	└── lib
		└── # Dependencies
```

## Development

To start your app run:

```bash
gulp
```

This runs Live-Reload at `http://localhost:5050`(, and will compile any Sass/TypeScript).

#### CSS Preprocessor
Only includes Sass right now using `gulp-sass`.

#### JS Superset
Not ready. 

### Test

Not ready. Will include Karma and Protractor.

### Production

Not ready.

## Contribute

This is my first published package, so contributions are very welcome. There are no guidelines for contributing. If you find a problem or have a suggestion go ahead and [submit an issue](https://github.com/thevelourfog/slush-angular2/issues).

## License

[MIT](https://github.com/thevelourfog/slush-angular2/LICENSE)