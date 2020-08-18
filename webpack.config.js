'use strict';

const BundleTracker = require('webpack-bundle-tracker');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {

	entry: path.resolve(__dirname, './client/index.js'),
	output: {
		path: path.resolve(__dirname, './dist/view/'),
		filename: 'bundle.js',
	},

	devtool: 'inline-source-map',
	devServer: {
		contentBase: __dirname + '/dist/view' 
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './client/src/index.html'),
		}),
		new BundleTracker({filename: './webpack-stats.json'}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.environment),
			}
  		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
			},
		],
	},
	node: {
		fs: "empty"
	},
	optimization: {
        splitChunks: false,
    },
};