<%= camel %>
============

## Usage
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

