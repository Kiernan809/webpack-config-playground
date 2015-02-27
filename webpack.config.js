var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    webpack = require('webpack');

var config = {
  devtool: 'eval',

  entry: './src/js/main.js',

  output: {
    path: './build',
    filename: 'build.js',
    chunkFilename: '[id].common.js',
    publicPath: '/__compiled/'
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.js$/, loader: 'jsx-loader?harmony'
    }, {
      test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style-loader', 'css-loader!sass-loader?outputStyle=expanded' +
        '&includePaths[]=' + ( path.resolve(__dirname, './bower_components') ) +
        '&includePaths[]=' + ( path.resolve(__dirname, './node_modules') )
      )
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components', 'vendor', 'web_modules'],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),

    new ExtractTextPlugin('[name].css', { allChunks: true }),

    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};

module.exports = config;
