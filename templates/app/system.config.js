System.config({
  map:  {
    'app': 'dist',
    '@angular': 'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable'
  },
  packages:  {
    'app': { defaultExtension: 'js', format: 'register', main: 'boot.js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    '@angular/common': { defaultExtension: 'js', main: 'index.js' },
    '@angular/compiler': { defaultExtension: 'js', main: 'index.js' },
    '@angular/core': { defaultExtension: 'js', main: 'index.js' },
    '@angular/http': { defaultExtension: 'js', main: 'index.js' },
    '@angular/platform-browser': { defaultExtension: 'js', main: 'index.js' },
    '@angular/platform-browser-dynamic': { defaultExtension: 'js', main: 'index.js' },
    '@angular/router': { defaultExtension: 'js', main: 'index.js' },
    'rxjs': { defaultExtension: 'js' },
    'symbol-observable': { defaultExtension: 'js', main: 'index.js' }
  }
});