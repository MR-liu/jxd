'use strict';

// This piece of code is inspired by create-react-app path config

const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

// config after eject: we're in ./config/
const commonPaths = {
  dotenv: resolveApp('.env'),
  appPackageJson: resolveApp('package.json'),
  publicPath: '/static/',
  clientEntry: resolveApp('app/index.tsx'),
  serverEntry: resolveApp('server/serverRenderer.tsx'),
  clientBuildTarget: resolveApp('build/client'),
  serverBuildTarget: resolveApp('build/server'),
  clientBuild: resolveApp('build/client'),
  serverBuild: resolveApp('build/server'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('app'),
  tslintExclude: resolveApp('app/data'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('app/setupTests.ts'),
  appNodeModules: resolveApp('node_modules'),
  appTsConfig: resolveApp('tsconfig.json'),
  appStylelintConfig: resolveApp('.stylelintrc.json'),
  postcssConfig: resolveApp('config/postcss.config.js'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  clientBuildStats: resolveApp('client/stats.json'),
  rootDir: appDirectory,
};

const prodPaths = Object.assign({}, commonPaths, {
  clientBuild: resolveApp('client'),
  serverBuild: resolveApp('server')
});

const getPaths = (env) => {
  if(env !== "Development") {
    return prodPaths;
  }
  return commonPaths;
}

module.exports = getPaths;
