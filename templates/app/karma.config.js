module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: './',
    browsers: [
      'Chrome'
    ],
    colors: true,
    exclude: [
      'node_modules/**/*spec.js'
    ],
    files: [
      'node_modules/core-js/client/shim.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      'node_modules/zone.js/dist/sync-test.js',
      'test/**/*.js'
    ],
    frameworks: [
      'jasmine'
    ],
    logLevel: config.LOG_INFO,
    plugins: [
      
    ],
    port: 9876,
    preprocessors: {
    },
    reporters: [
      'progress'
    ],
    singleRun: false
  })
}
