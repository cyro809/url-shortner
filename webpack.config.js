const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    redirect: './src/redirect.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/js'),
  },
};
