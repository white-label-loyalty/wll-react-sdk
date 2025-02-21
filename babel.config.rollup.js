module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        // This will ensure react-native imports work in both environments
        '^react-native$': 'react-native-web',
      },
      extensions: ['.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx'],
    }],
  ],
};
