const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    filename: 'js/app.js',    // бандълът, който index.html зарежда
    path: path.resolve(__dirname, '.'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],   // да може да импортваш без разширение
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',      // или babel-loader с подходящи preset-и
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
