module.exports = {
  entry: {
    'app1': './client/app1/index.js',
  },
  output: {
    path: './public/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: [
          'es2015',
          'stage-1',
          'react'
        ]
      }
    }]
  },
  devtool: 'inline-source-map'
};
