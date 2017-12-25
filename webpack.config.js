var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
var NODE_MODULES = path.join(__dirname, '/node_modules');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  // node: {
  //   console: false,
  //   global: true,
  //   process: true,
  //   Buffer: true,
  //   __filename: "mock",
  //   __dirname: "mock",
  //   setImmediate: true
  // }
  // externals: nodeModules,
  // target: 'node',
};