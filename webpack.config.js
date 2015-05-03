var ExtractTextPlugin = require("extract-text-webpack-plugin")
,   path = require('path')
,   webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',

  output: {
    path: './build/',
    filename: 'build.js',
    publicPath: '/__compiled/'
  },

  module: {
    loaders: [{
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style-loader", "css-loader!sass-loader?outputStyle=expanded&" +
          "includePaths[]="  + (path.resolve(__dirname, "./bower_components")) +
          "&includePaths[]=" + (path.resolve(__dirname, "./node_modules"))
        )
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    })
  ]
};
