import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src/scripts/module.js')
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'angular-color-picker.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      // Babel (ES6) Loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // Cache transformations to avoid unnecessary recompilations
            cacheDirectory: true,
            presets: ['env'],
            // Disable automatic per-file runtime injection
            plugins: ['transform-runtime']
          }
        }
      }
    ]
  }
}