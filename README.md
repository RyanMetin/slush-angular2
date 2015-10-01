[slush-angular2](https://www.npmjs.com/package/slush-angular2)
==============

[![Build Status](https://travis-ci.org/TheVelourFog/slush-angular2.svg?branch=master)](https://travis-ci.org/TheVelourFog/slush-angular2) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-angular2.png)](http://badges.enytc.com/for/npm/slush-angular2) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/TheVelourFog/slush-angular2/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Start playing with the Angular2 Alpha
>Generate a project with:
>* **[angular2](https://www.npmjs.com/package/angular2)**
>* **[browsersync](https://www.npmjs.com/package/browser-sync)**
>* **[jspm](https://www.jspm.io)**
>* **[systemjs](https://www.npmjs.com/package/systemjs)**
>* **[typescript](https://typescriptlang.org)**

### Installation
>Install package globally (**[slush](https://www.npmjs.com/package/slush)** as well, if you don't have it):
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
>TypeScript in `src/` is compiled automatically by systemjs on load.
>
>Any new TypeScript file must have its path mapped for the `src/` package  in `config.js`:
>>```
>>System.config({
>>	packages: {
>>	  "src": {
>>	    "map": {
>>	      [module alias]: [file path (ts extension can be omitted)]
>>```
>
>To manually start Browsersync:
>>`npm start`

## Structure

>* index.html
>* config.js
>* src/
>  * Scripts, styles or templates here. Browsersync watches this directory for changes.
>* typings/
>  * TypeScript definitions.

## To-do
	
>* Tests.
>* Component/directive/service generators.
>* Optional Express usage.
	

## Contribute

>This is my first published package, so contributions are very welcome. There are no guidelines for contributing. If you find a problem or have a suggestion go ahead and [submit an issue](https://github.com/thevelourfog/slush-angular2/issues).

## License

>[MIT](https://github.com/thevelourfog/slush-angular2/blob/master/LICENSE)

