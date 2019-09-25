const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');

 module.exports = {
   entry: {
     app: './src/index.js'
   },
   output: {
     filename: '[name].[chunkhash].js',
     path: path.resolve(__dirname, 'dist')
	 },
	 module: {
		 rules: [
			 {
				test: /\.(c|le)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it uses publicPath in webpackOptions.output
							publicPath: path.resolve(__dirname, 'dist'),
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					'css-loader',
					'less-loader'
				]
			 },
			 {
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							limit: 10000,
							publicPath: "./images/",
							outputPath: "images/"
						}
					}
				]
			 },
			 {
				 test: /\.(woff|woff2|eot|ttf|otf)$/,
				 use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: "./font/",
							outputPath: "font/"
						}
					}
					]
			 },
			 {
				 test: /\.html$/,
				 use: [
					 {
						 loader: 'html-loader',
						 options: {
							 attrs: ['img:src']
						 }
					 }
					]
			 },
		 ]
	 },
   plugins: [
    new MiniCssExtractPlugin({
    	// Options similar to the same options in webpackOptions.output
    	// all options are optional
    	filename: 'bsui.css',
    	ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
			inject: true,
			minify:{
				collapseWhitespace: true,
				removeComments: true,
			}
		 }),
		//  new webpack.DefinePlugin({
		// 	 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		//  })
	 ],
	 stats: 'errors-only'
 };