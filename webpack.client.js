var path = require('path')
var webpack = require('webpack')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: ['./src/client.js', './src/assets/scss/main.scss'],
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
  },
  stats: {
    chunks: true,
    chunkModules: true,
    colors: true,
    children: false,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: false,
            },
          }
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
      chunkFilename: 'assets/css/[id].css',
    }),
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src', 'assets')],
    alias: {
      api: path.resolve(__dirname, './api'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      config: path.resolve(__dirname, './config'),
    //   hoc: path.resolve(__dirname, './src/hoc'),
      layouts: path.resolve(__dirname, './src/layouts'),
    //   queries: path.resolve(__dirname, './src/queries'),
      helpers: path.resolve(__dirname, './src/helpers'),
      routes: path.resolve(__dirname, './src/routes'),
    //   models: path.resolve(__dirname, './src/models'),
    //   pages: path.resolve(__dirname, './src/pages')
    }
  }
}