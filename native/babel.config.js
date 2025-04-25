const path = require('path');

module.exports = function (api) {
  api.cache(true);

  const rootDir = path.resolve(__dirname, '..');

  console.log('rootDir', rootDir);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // Map parent module dependencies
            'lucide-react': path.resolve(rootDir, 'node_modules/lucide-react'),
            'lucide-react-native': path.resolve(
              rootDir,
              'node_modules/lucide-react-native'
            ),
            react: path.resolve(rootDir, 'node_modules/react'),
            'react-dom': path.resolve(rootDir, 'node_modules/react-dom'),
            'react-native': path.resolve(rootDir, 'node_modules/react-native'),
            'react-native-web': path.resolve(
              rootDir,
              'node_modules/react-native-web'
            ),
            'react-native-reanimated': path.resolve(
              rootDir,
              'node_modules/react-native-reanimated'
            ),
            // Add other dependencies as needed
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
