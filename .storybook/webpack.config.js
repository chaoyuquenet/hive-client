const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const project = require('../project.config')

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

const __DEV__ = project.env === 'development'
const __TEST__ = project.env === 'test'
const __PROD__ = project.env === 'production'

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const config = {
  plugins: [
  ],
  module: 
   { rules: 
      [ { test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 
           [ { loader: 'babel-loader',
               query: 
                { cacheDirectory: true,
                  plugins: 
                   [ 'babel-plugin-transform-class-properties',
                     'babel-plugin-syntax-dynamic-import',
                     [ 'babel-plugin-transform-runtime',
                       { helpers: true, polyfill: false, regenerator: true } ],
                     [ 'babel-plugin-transform-object-rest-spread',
                       { useBuiltIns: true } ] ],
                  presets: 
                   [ 'babel-preset-react',
                     [ 'babel-preset-env',
                       { modules: false, targets: { ie9: true }, uglify: true } ] ] } } ] },
        { test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          options: { limit: 8192 } },
        { test: /\.woff$/,
          loader: 'url-loader',
          options: 
           { name: 'fonts/[name].[ext]',
             limit: 10000,
             mimetype: 'application/font-woff' } },
        { test: /\.woff2$/,
          loader: 'url-loader',
          options: 
           { name: 'fonts/[name].[ext]',
             limit: 10000,
             mimetype: 'application/font-woff2' } },
        { test: /\.otf$/,
          loader: 'url-loader',
          options: 
           { name: 'fonts/[name].[ext]',
             limit: 10000,
             mimetype: 'font/opentype' } },
        { test: /\.ttf$/,
          loader: 'url-loader',
          options: 
           { name: 'fonts/[name].[ext]',
             limit: 10000,
             mimetype: 'application/octet-stream' } },
        { test: /\.eot$/,
          loader: 'url-loader',
          options: 
           { name: 'fonts/[name].[ext]',
             limit: 10000,
             mimetype: 'application/vnd.ms-fontobject' } },
        { test: /\.svg$/,
          loader: 'url-loader',
          options: 
           { name: 'fonts/[name].[ext]',
             limit: 10000,
             mimetype: 'image/svg+xml' } } ] },
};


const extractStyles = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash].css',
  allChunks: true,
  disable: __DEV__,
});

config.module.rules.push({
  test: /\.(sass|scss)$/,
  loader: extractStyles.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: project.sourcemaps,
          minimize: {
            autoprefixer: {
              add: true,
              remove: true,
              browsers: ['last 2 versions'],
            },
            discardComments: {
              removeAll : true,
            },
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            sourcemap: project.sourcemaps,
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: project.sourcemaps,
          includePaths: [
            inProjectSrc('styles'),
          ],
        },
      }
    ],
  })
});

config.plugins.push(extractStyles);

module.exports = config;
