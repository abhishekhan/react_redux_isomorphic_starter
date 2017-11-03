var webpack = require('webpack');

module.exports = {
  context: __dirname + "/client",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
    publicPath: "app/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react' // ReactJS module name in node_modules folder
    })
  ]
}