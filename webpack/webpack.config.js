const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  module: {
    rules: [      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /node_modules/,
        include: [path.resolve('./src/assets/images')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              esModule: false,
            }
          }
        ],
        type: 'javascript/auto'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.resolve('./src')],
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new CssMinimizerWebpackPlugin,
  ],
  devServer: {
    port: 8081,
    open: true,
  }
};

