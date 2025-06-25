const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/main.jsx',
  mode: 'development',
  target: 'web',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  output: {
    publicPath: 'auto'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        dashboard: 'dashboard@http://localhost:3001/remoteEntry.js',
        profile: 'profile@http://localhost:3003/remoteEntry.js',
        booking: 'booking@http://localhost:3002/remoteEntry.js',
        feedback: 'feedback@http://localhost:3004/remoteEntry.js',
        auth: 'auth@http://localhost:3005/remoteEntry.js',
        layout: 'layout@http://localhost:3006/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
        'react-router-dom': { singleton: true, requiredVersion: '^6.20.0' },
        '@mtbs/shared-lib': {
          singleton: true,
          requiredVersion: '^1.0.0'
        }
      }
    }),
    new Dotenv(),
    new HtmlWebpackPlugin({ template: './index.html' })
  ],
  ignoreWarnings: [
    {
      module: /@mtbs\/shared-lib\/dist\/mocks\.js/,
      message: /Critical dependency: require function/,
    }
  ]
};
