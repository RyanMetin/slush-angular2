System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "declaration": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "module": "commonjs"
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "src": {
      "defaultExtension": "ts",
      "main": "boot",
      "map": {
        "appComponent": "src/app/appComponent",
        "customPipes": "src/shared/customPipes",
        "exampleComponent": "src/example/exampleComponent",
        "exampleDirective": "src/example/exampleDirective"
      }
    }
  }
});
