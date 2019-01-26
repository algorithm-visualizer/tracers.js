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
    process: false,
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader', include: srcPath },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  plugins: [
    new CleanWebpackPlugin([buildPath]),
    new DtsBundlePlugin(),
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

function DtsBundlePlugin() {
}

DtsBundlePlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function () {
    const dts = require('dts-bundle');

    dts.bundle({
      name: 'algorithm-visualizer',
      main: path.resolve(srcPath, 'index.d.ts'),
      out: path.resolve(buildPath, 'algorithm-visualizer.d.ts'),
      removeSource: true,
    });
  });
};
