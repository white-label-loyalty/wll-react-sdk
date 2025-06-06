const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const projectRoot = __dirname;
const rootDir = path.resolve(projectRoot, '../');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [rootDir];

const libDir = path.resolve(rootDir, 'lib');
config.watchFolders = [libDir];

// Set up module resolution paths
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(rootDir, 'node_modules'),
];

config.transformer = {
  ...config.transformer,
  unstable_allowRequireContext: true,
};

// Ensure cache is reset to pick up changes
config.resetCache = true;
module.exports = withStorybook(config, {
  enabled: true,
  configPath: path.resolve(__dirname, "./.storybook"),
  useJs: false,
});
