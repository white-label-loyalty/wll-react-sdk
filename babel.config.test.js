// babel.config.js
module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    env: {
      test: {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          ['@babel/plugin-proposal-class-properties', { loose: true }],
          '@babel/plugin-proposal-export-namespace-from',
        ],
      },
    },
  };
};
