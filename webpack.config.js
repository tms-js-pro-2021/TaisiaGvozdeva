const path = require('path');

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  // entry: './src/index.js',
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true,
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.css$/,
      //   exclude: /nodeModules/,
      //   use: {
      //     loader: 'css-loader',
      //   },
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
