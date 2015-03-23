(function(){
  System.config({
    paths: {
      'angular2/*':'lib/angular2/*.js',
      'rtts_assert/*': 'lib/rtts_assert/*.js',
      'index': 'index.js',
      'component/*': 'component/**/*.js',
      'service/*': 'service/**/*.js'
    }
  });
  System.import('index').then(function(module) {
    module.main();
  }, console.log.bind(console));
})();