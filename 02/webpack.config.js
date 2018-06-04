const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname,'build'),
		filename: 'bundle-[hash].js'
	},
	devServer: {
		contentBase: './src',
		inline: true
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	mode: 'development'
}