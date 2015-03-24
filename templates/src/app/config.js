(function(){
  System.config({
    paths: {
      'angular2/*':'lib/angular2/*.js',
      'rtts_assert/*': 'lib/rtts_assert/*.js',
      'index': 'app/index.js',
      'component/*': 'app/component/*.js',
      'service/*': 'app/service/*.js'
    }
  });
  System.import('index').then(function(module) {
    module.main();
  }, console.log.bind(console));
})();