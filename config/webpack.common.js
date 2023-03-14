const path = require('path');
const CopyWebpackPlugin = require ("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './app.js',
  context: path.resolve(__dirname, '../src'),
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      src: path.resolve(__dirname, './'),
      handlebars: 'handlebars/dist/handlebars.min.js',
      components: path.resolve(__dirname, '/components'),
      assets: path.resolve(__dirname, '/assets'),
      utils: path.resolve(__dirname, '/utils'),
      store: path.resolve(__dirname, '/store'),
      hoc: path.resolve(__dirname, '/hoc'),
      core: path.resolve(__dirname, '/core'),
      api: path.resolve(__dirname, '/api'),
      modules: path.resolve(__dirname, '/modules'),
      types: path.resolve(__dirname, '/core/types'),
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              precompileOptions: {
                knownHelpersOnly: false,
              },
              runtime: "handlebars/dist/handlebars.runtime",
            },
          },
        ],

        exclude: /(node_modules)/,
      },
    ]
  },
  performance: {
    maxEntrypointSize: 6120000,
    maxAssetSize: 6120000
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: 'assets',
        to: '../dist/assets',
        noErrorOnMissing: true,
      }]
    }),
    new HtmlWebpackPlugin({
      template: "../static/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css'
    })
  ],
};
