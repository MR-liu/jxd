const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        use: {
          fallback: {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          },
          use: [{
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                namedExport: true,
                camelCase: true,
                minimize: true,
                localIdentName: "[local]_[hash:base64:5]"
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true
              }
            }
          ]
        }
      },
    ],

    /* Advanced module configuration (click to show) */
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, ".")
    ],
    // directories where to look for modules

    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    // extensions that are used
  },

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: ["react"],
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: "errors-only",
  // lets you precisely control what bundle information gets displayed
  plugins: [
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('../css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
  ]
}
