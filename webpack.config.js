const path = require('path');

module.exports = {
  entry: './src/riotjs-selected-nodes-storage.min.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'riotjs-selected-nodes-storage.js'
  }
};
