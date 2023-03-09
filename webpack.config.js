const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'project-name.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      store: path.resolve(__dirname, 'src/store'),
      hoc: path.resolve(__dirname, 'src/hoc'),
      core: path.resolve(__dirname, 'src/core'),
      api: path.resolve(__dirname, 'src/api'),
      modules: path.resolve(__dirname, 'src/modules'),
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
      watch: true
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
    watchFiles: './src'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
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
              configFile: path.resolve(__dirname, 'tsconfig.json'),
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/assets',
        to: 'assets'
      }]
    }),
    new CleanWebpackPlugin(),
  ],
};
