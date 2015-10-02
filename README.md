[slush-angular2](https://www.npmjs.com/package/slush-angular2)
==============

[![Build Status](https://travis-ci.org/TheVelourFog/slush-angular2.svg?branch=master)](https://travis-ci.org/TheVelourFog/slush-angular2) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-angular2.png)](http://badges.enytc.com/for/npm/slush-angular2) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/TheVelourFog/slush-angular2/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Start Using Angular2
>Generate a project that uses:
>* **[angular2](https://www.npmjs.com/package/angular2)**
>* **[browsersync](https://www.npmjs.com/package/browser-sync)**
>* **[jspm](https://www.jspm.io)**
>* **[systemjs](https://www.npmjs.com/package/systemjs)**
>* **[typescript](https://typescriptlang.org)**

### Installation
>Install package globally (**[slush](https://www.npmjs.com/package/slush)** and **[tsd](https://www.npmjs.com/package/tsd)** as well, if you don't have them):
>>`npm i -g slush-angular2`
>
>Run the generator:
>>`slush angular2`
>
>This automatically opens browser to new directory. 
>
>Your Angular2 project is ready to go.
>
>>![](http://i.imgur.com/85O2cvX.gif)

### Usage
>TypeScript in `src/` is imported into `boot.ts` and compiled automatically by systemjs on load.
>
>TypeScript files can have an alias mapped for the `src/` package  in `config.js`:
>>```
>>System.config({
>>	packages: {
>>	  "src": {
>>	    "map": {
>>	      [module alias]: [file path (ts extension can be omitted)]
>>```
>This way the file can imported by its alias. Otherwise, it must have its path referenced for import
>
>Browsersync can be started manually with:
>>`npm start`

## Structure

>* index.html  <-- Watched by Browsersync
>* config.js  <-- Watched by Browsersync.
>* res/  <-- Shared resources; images, styling, etc.
>* src/  <-- Browsersync watches everything in this directory for changes.
>  * component/  <-- Seperate components in here.
>  * directives/  <-- Directives.
>  * service/  <-- Services.
>* typings/  <-- TypeScript definitions.

## To-do
	
>* Tests.
>* Component/directive/service generators.
>* Optional Express usage.
	

## Contribute

>This is my first published package, so contributions are very welcome. There are no guidelines for contributing. If you find a problem or have a suggestion go ahead and [submit an issue](https://github.com/thevelourfog/slush-angular2/issues).

## License

>[MIT](https://github.com/thevelourfog/slush-angular2/blob/master/LICENSE)

