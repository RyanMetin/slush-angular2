exports.config = {
  baseUrl: 'http://localhost:8765',
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 40000,
    showColors: true
  },
  specs: [

  ],
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {

  },
  onPrepare: function () {
    
  }
};