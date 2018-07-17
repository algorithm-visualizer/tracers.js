const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');
const srcPath = path.resolve(__dirname, 'src');

module.exports = [{
  target: 'web',
  entry: path.resolve(srcPath, 'worker'),
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js'],
  },
  output: {
    path: buildPath,
    filename: 'index.js',
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