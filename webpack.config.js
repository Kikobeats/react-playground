'use strict';

module.exports = {
  context: __dirname + "/src/app",
  entry: "./app.jsx",
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  devServer: {
    contentBase : __dirname + '/src/client/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }
    ]
  }
};
