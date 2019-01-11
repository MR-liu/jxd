const path = require('path');
const loaders = require('./loaders');
const storybookBaseConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const getPaths = require('../paths');

module.exports = storybookBaseConfig => {
  const newConfig = { ...storybookBaseConfig
  };
  newConfig.resolve = {
      ...storybookBaseConfig.resolve,
      extensions: ['.ts', '.tsx', '.js'],
      // modules: ['node_modules', getPaths().rootDir, getPaths().appNodeModules, getPaths().appSrc]
    },
    newConfig.module.rules = [
      loaders.tsLoaderConfig(),
      loaders.cssStorybookLoaderConfig(),
      loaders.fontLoader()
    ];

  newConfig.resolve.alias = {
    ...storybookBaseConfig.resolve.alias,
  };

  // Return the altered config
  return newConfig;
};


// module.exports = function(config, env) {
//   config = storybookBaseConfig(config, env);

//   config.module.rules.push({
//     test: /\.tsx?$/,
//     exclude: /node_modules/,
//     include: [/stories/, /components/, /src/],
//     loader: 'awesome-typescript-loader',
//   });

//   config.module.rules.push({
//     test: /\.css$/,
//     loader: 'css-loader',
//   });

//   config.module.rules.push({
//     test: /\.scss$/,
//     loaders: ['style-loader', 'css-loader', 'sass-loader'],
//     include: path.resolve(__dirname, '../'),
//   });

//   config.resolve.extensions.push('.tsx');
//   config.resolve.extensions.push('.ts');
//   config.resolve.extensions.push('.js');
//   config.resolve.extensions.push('.css');
//   config.resolve.extensions.push('.scss');

//   return config;
// };
