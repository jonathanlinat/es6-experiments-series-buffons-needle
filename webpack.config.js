const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, options) => {
  const isProductionMode = options.mode === 'production';

  const srcPath = path.resolve(__dirname, './src');
  const distPath = path.resolve(__dirname, './dist');

  const webpackConfig = {
    entry: {
      app: [srcPath + '/app.js', srcPath + '/app.sass', srcPath + '/index.html'],
    },
    output: {
      path: distPath,
    },
    devServer: {
      host: '127.0.0.1',
      open: true,
      hot: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebPackPlugin({
        template: srcPath + '/index.html',
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.sass$/,
          use: [isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        },
      ],
    },
    optimization: {
      minimize: isProductionMode,
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin(),
        new HtmlWebPackPlugin({
          template: srcPath + '/index.html',
          hash: true,
          cache: true,
          minify: {
            html5: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            decodeEntities: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortAttributes: true,
            sortClassName: true,
            useShortDoctype: true,
          },
        }),
      ],
    },
  };

  return webpackConfig;
};
