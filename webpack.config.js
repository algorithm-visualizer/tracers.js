const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const buildPath = path.resolve(__dirname, 'bin');
const srcPath = path.resolve(__dirname, 'src');

const alias = {
  '/package.json': path.resolve(__dirname, 'package.json'),
};
fs.readdirSync(srcPath).forEach(name => {
  alias['/' + name] = path.resolve(srcPath, name);
});

module.exports = {
  target: 'node',
  node: {
    __dirname: true,
  },
  entry: {
    build: path.resolve(srcPath, 'executables', 'build.js'),

    compile: path.resolve(srcPath, 'executables', 'compile.js'),
    release: path.resolve(srcPath, 'executables', 'release.js'),
    run: path.resolve(srcPath, 'executables', 'run.js'),
  },
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