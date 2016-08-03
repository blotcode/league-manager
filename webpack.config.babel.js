/* global __dirname */

import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

var _appSource = path.resolve(__dirname, 'source');
var _appBuild = path.resolve(__dirname, 'build');
var ENV = process.env.NODE_ENV = process.env.ENV = 'test';
var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || 8080;

var metadata = {
    title: 'League Manager',
    baseUrl: '/',
    host: HOST,
    port: PORT,
    ENV: ENV
};

module.exports = {
    entry: path.resolve(_appSource, 'main.js'),
    output: {
        path: _appBuild,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: _appBuild
    },
    module: {
        loaders: [
        {
            test: _appSource,
            loader: 'babel',
            query: {
                presets: ['es2015'],
                plugins: [
                  "angular2-annotations",
                  "transform-decorators-legacy",
                  "transform-class-properties",
                  "transform-flow-strip-types",
                  "transform-runtime"
                ]
            }
        },
        { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
        { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
        { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
      ]
    },
    plugins: [

      // Simply copies the files over
      new CopyWebpackPlugin([
        {from: _appSource} // to: output.path
      ]),

      // Avoid publishing files when compilation fails
      new webpack.NoErrorsPlugin(),

      new webpack.DefinePlugin({
          // Environment helpers
          ENVIRINMENT_DEV: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
      })
  ],
    stats: {

        // Nice colored output
        colors: true

    },

    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    metadata: metadata,
    debug: true

};
