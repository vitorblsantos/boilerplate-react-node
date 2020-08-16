'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {

	entry: path.resolve(__dirname, './client/index.js'),
	output: {
		path: path.resolve(__dirname, './client/dist/'),
		filename: '[name].js',
	},

	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './client/src/index.html'),
		}),
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
	watch: true,
};