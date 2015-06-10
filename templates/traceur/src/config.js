System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "traceurOptions": {
    "annotations": true,
    "memberVariables": true,
    "types": true
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular2": "npm:angular2@2.0.0-alpha.26",
    "reflect-metadata": "npm:reflect-metadata@0.1.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "zone.js": "npm:zone.js@0.5.0"
  }
});