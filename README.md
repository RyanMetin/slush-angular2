[slush-angular2](https://www.npmjs.com/package/slush-angular2)
==============

[![Build Status](https://travis-ci.org/RyanMetin/slush-angular2.svg?branch=master)](https://travis-ci.org/TheVelourFog/slush-angular2)
[![NPM version](https://badge-me.herokuapp.com/api/npm/slush-angular2.png)](http://badges.enytc.com/for/npm/slush-angular2)

## Simple Angular2 seed using Systemjs
Generate a project that uses **[angular2](https://www.npmjs.com/package/angular2)**, **[gulp](https://www.npmjs.com/package/gulp)**, **[systemjs](https://www.npmjs.com/package/systemjs)**, and **[typescript](https://typescriptlang.org)**.

## Installation
Install package globally (requires **[slush](https://www.npmjs.com/package/slush)**):
>`npm i -g slush-angular2 [slush]`

## Usage
Run the generator:
>`slush angular2 [<name>]`

Compile and serve:
>`npm start`

App is now ready on port **8080**.
>![](http://i.imgur.com/85O2cvX.gif)

To manually start compiler and server:
>`npm start` or `gulp start:dev`

To bundle application and serve:
>`npm run prod` or `gulp start:prod`

## Structure
>* index.html <-- Entry point for application.
>* gulpfile.js <--
>* tsconfig.json <-- Configuration for TypeScript compiler.
>* res/ <-- Shared resources.
>* src/ <-- TypeScript goes in here.
>>* boot.ts <-- Strapping boots.
>>* app/ <-- Main application with route configuration.
>>* shared/ <-- Common directs, pipes, and services.
>>* examples/ <-- Example components.
>* dist/ <-- JavaScript comes out here.

## Contribute
There are no guidelines for contributing. If you find a problem or have a suggestion go ahead and [submit an issue](https://github.com/ryanmetin/slush-angular2/issues).

## License
[MIT](https://github.com/thevelourfog/slush-angular2/blob/master/LICENSE)
