# gulp-conflict [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Check if files in stream conflict with those in target dir, with option to use new, keep old, show diff, etc.

## Primary objective

Used before any `gulp.dest` step when using [`slush`](https://www.npmjs.org/package/slush) as a Yeoman replacement.

## Installation

### For global use with slush

Install `gulp-conflict` as a dependency:

```shell
npm install --save gulp-conflict
```

### For local use with gulp

Install `gulp-conflict` as a development dependency:

```shell
npm install --save-dev gulp-conflict
```

## Usage

### In your `slushfile.js`:

```javascript
var conflict = require("gulp-conflict");

gulp.src(__dirname + '/templates/**')
  .pipe(conflict('./'))
  .pipe(gulp.dest('./'));
```

### In your `gulpfile.js`:

```javascript
var install = require("gulp-conflict");

gulp.src(['./files/*.js'])
  .pipe(conflict('./dir'))
  .pipe(gulp.dest('./dir'));
```

## API

### conflict(dest, options)

#### dest

Type: `String`, *required*

Specify destination directory to compare files in, should be the same as destination directory for `gulp.dest`.

#### options

Type: `Object`, *optional*

**options.cwd** - specify another working directory than `process.cwd()`

**options.defaultChoice** - default choice on conflicts e.g. `'y'` (replace, default), `'n'` (skip), `'d'` (diff)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-conflict
[npm-image]: https://badge.fury.io/js/gulp-conflict.png

[travis-url]: http://travis-ci.org/slushjs/gulp-conflict
[travis-image]: https://secure.travis-ci.org/slushjs/gulp-conflict.png?branch=master

[depstat-url]: https://david-dm.org/slushjs/gulp-conflict
[depstat-image]: https://david-dm.org/slushjs/gulp-conflict.png
