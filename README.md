[slush-angular2](https://www.npmjs.com/package/slush-angular2)
==============

[![Build Status](https://travis-ci.org/TheVelourFog/slush-angular2.svg?branch=master)](https://travis-ci.org/TheVelourFog/slush-angular2) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-angular2.png)](http://badges.enytc.com/for/npm/slush-angular2) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/TheVelourFog/slush-angular2/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Start Using Angular2
>Generate a project that uses **[angular2](https://www.npmjs.com/package/angular2)**, **[systemjs](https://www.npmjs.com/package/systemjs)**, and **[typescript](https://typescriptlang.org)**.
>
>Then generate Angular2 features inside that project.

## Installation
>Install package globally (requires **[slush](https://www.npmjs.com/package/slush)**):
>>`npm i -g slush-angular2 [slush]`

## Usage
>Run the generator:
>>`slush angular2 [<name>]`
>
>After generation, the TypeScript compiler will start in watch mode and **[live-server](https://www.npmjs.com/package/live-server)** will open your browser to the new directory.
>
>>![](http://i.imgur.com/85O2cvX.gif)

>Use these tasks to build corresponding Angular2 features:
>* component
>* directive
>* pipe
>* service
>
>Run in root of project with task:
>>`slush angular2:<task> [<name>]`
>
>Import your new TypeScript files by their path, ie. `./path`, omitting the `.ts` extension.
>
>To manually start compiler and server run:
>>`npm start`

## Structure
>* index.html  <-- Entry point for application.
>* tsconfig.json  <-- Configuration for TypeScript compiler.
>* res/  <-- Shared resources: images, styling, etc.
>* src/  <-- TypeScript goes in here.
>>* boot.ts  <-- Strapping boots.
>>* component/
>>* directives/
>>* service/
>* dist/  <-- JavaScript comes out here.

## To-do
>* Fix example.
>* Tests.
>* Stop forgetting tests.

## Contribute
>There are no guidelines for contributing. If you find a problem or have a suggestion go ahead and [submit an issue](https://github.com/thevelourfog/slush-angular2/issues).

## License
>[MIT](https://github.com/thevelourfog/slush-angular2/blob/master/LICENSE)
