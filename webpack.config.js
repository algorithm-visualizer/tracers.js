const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');

module.exports = [{
  entry: srcPath,
  externals: [nodeExternals()],
  output: {
    path: buildPath,
    filename: 'algorithm-visualizer.js',
    library: 'AlgorithmVisualizer',
    libraryTarget: 'umd',
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  node: {
    process: false
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include: srcPath },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([buildPath]),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  mode: 'production',
}];
