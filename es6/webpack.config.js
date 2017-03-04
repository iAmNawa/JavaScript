module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: '/Users/paul/Desktop/JavaScript/es6/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3447,
    contentBase: "/build",
    inline: true
  }
}
