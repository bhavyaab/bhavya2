'use strict';


const dotenv = require('dotenv');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

dotenv.load();
const production = process.env.NODE_ENV === 'production';

let plugins = [
  new ExtractTextPlugin('bundle.css'),
  new HTMLPlugin({ template: `${__dirname}/app/index.html` }),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(process.env.API_URL),
    __DEBUG__: JSON.stringify(!production)
  })
];

if (production) {
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: { warnings: false }
    }),
    new CleanPlugin()
  ]);
}

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  devtool: production ? false : 'eval',
  plugins,
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  sassLoader: { includePaths: [
    `${__dirname}/node_modules/bootstrap/scss/`,
    `${__dirname}/app/scss`
  ] },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.html$/,
      loader: 'html'
    },
    {
      test: /\.(woff|ttf|svg|eot).*/,
      loader: 'url?limit=10000&name=font/[hash].[ext]'
    },
    {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 60000,
          name: 'image/[name].[ext]',
        },
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap')
    }
    ]
  }
};
