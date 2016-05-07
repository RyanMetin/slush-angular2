module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: ['karma-jasmine'],
    exclude: [],
    files: [
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
    ],
    preprocessors: [],
    reporters: []
  });
}