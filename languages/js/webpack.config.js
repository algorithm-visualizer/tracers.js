const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const builtPath = path.resolve(__dirname, 'built');
const srcPath = path.resolve(__dirname, 'src');

module.exports = [{
  target: 'web',
  entry: path.resolve(srcPath, 'worker'),
  resolve: {
    modules: [srcPath],
    extensions: ['.js'],
  },
  output: {
    path: builtPath,
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include: srcPath },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([builtPath]),
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