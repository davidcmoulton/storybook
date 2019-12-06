import path from 'path';

export default (mode) => ({
  mode: mode || 'development',
  entry: './src/patterns/main.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].libero-bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)|(\.stories\.js$)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  //   usedExports: true,
  // },
  //
  stats: 'verbose',
  devtool: 'source-map',
});
