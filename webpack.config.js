const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const buildPath = path.resolve(__dirname, 'bin');
const srcPath = path.resolve(__dirname, 'src');
const executablesPath = path.resolve(srcPath, 'executables');

const alias = {
  '/package.json': path.resolve(__dirname, 'package.json'),
};
fs.readdirSync(srcPath).forEach(name => {
  alias['/' + name] = path.resolve(srcPath, name);
});

const entry = {};
fs.readdirSync(executablesPath).forEach(name => {
  const [, executable] = /^(\w+)\.js$/.exec(name);
  entry[executable] = path.resolve(executablesPath, name);
});

module.exports = {
  target: 'node',
  node: {
    __dirname: true,
  },
  entry,
  externals: [nodeExternals()],
  resolve: {
    modules: [srcPath],
    extensions: ['.js'],
    alias,
  },
  output: {
    path: buildPath,
    filename: '[name]',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include: srcPath },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([buildPath]),
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true, entryOnly: true }),
  ],
  mode: 'production',
};
