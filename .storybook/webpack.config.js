const path = require('path');
const storybookBaseConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config, env) {
  config = storybookBaseConfig(config, env);

  const typingsForCssModulesLoaderConf = {
    loader: 'typings-for-css-modules-loader',
    options: {
      modules: true,
      namedExport: true,
      camelCase: true,
      sass: true
    }
  }

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    include: [/stories/, /components/],
    loader: 'awesome-typescript-loader',
  });

  config.module.rules.push({
    test: /\.css$/,
    loader: 'css-loader',
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader', 'typingsForCssModulesLoaderConf'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.js');
  config.resolve.extensions.push('.css');
  config.resolve.extensions.push('.scss');

  return config;
};
