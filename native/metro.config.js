const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const projectRoot = __dirname;
const rootDir = path.resolve(__dirname, '..');

const config = getDefaultConfig(projectRoot);

// Add parent directories to watch
config.watchFolders = [
  path.resolve(rootDir, 'lib'),
  path.resolve(rootDir, 'node_modules'),
];

// Set up module resolution paths
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(rootDir, 'node_modules'),
];

// Add extraNodeModules to map package names to their locations
config.resolver.extraNodeModules = {
  // 'lucide-react': path.resolve(rootDir, 'node_modules/lucide-react'),
  // color: path.resolve(rootDir, 'node_modules/color'),
  // react: path.resolve(projectRoot, 'node_modules/react'),
  // 'react-dom': path.resolve(projectRoot, 'node_modules/react-dom'),
  // 'react-native': path.resolve(projectRoot, 'node_modules/react-native'),
  // 'react-native-reanimated': path.resolve(
  //   projectRoot,
  //   'node_modules/react-native-reanimated'
  // ),
  // 'react-native-web': path.resolve(
  //   projectRoot,
  //   'node_modules/react-native-web'
  // ),
};

config.transformer = {
  ...config.transformer,
  unstable_allowRequireContext: true,
};

// Ensure cache is reset to pick up changes
config.resetCache = true;

module.exports = withStorybook(config, {
  enabled: true,
  configPath: path.resolve(__dirname, './.storybook'),
  useJs: true,
});
