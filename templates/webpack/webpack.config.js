/// <reference path="src/typings/node/node.d.ts"/>

var webpack = require('webpack'),
	path = require('path');
	
var dir = {
	src: path.resolve(__dirname, 'src'),
	dist: path.resolve(__dirname, 'dist'),
	npm: path.resolve(__dirname, 'node_modules')
};

module.exports = {
	context: __dirname,
	devtool: 'eval',
	devServer: {
		hot: true,
		inline: true,
	},
	entry: {
		app: [
			'./src/index'
		],
		angular2: [
			
		]
	},
	module: {
		preLoaders: [{test: /\.ts$/, include: dir.src, loader: 'tslint'}],
		loaders: [{test: /\.ts$/, include: dir.src, loader: 'typescript-simple'}, {test: /\.html$/, loader: 'raw'}]
	},
	output: {
		path: dir.dist,
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.DedupePlugin()
	],
	resolve: {
		alias: {
			'angular2': 'angular2/es6/prod'	
		},
		extensions: ['', '.js', '.ts', '.web.js', '.webpack.js']
	}
};