module.exports = api => {
  const isTest = api.env('test');
  
  return {
    presets: [
      ['module:metro-react-native-babel-preset', { modules: false }]
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '^react-native$': 'react-native-web'
        }
      }]
    ],
    env: {
      test: {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }],
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }]
        ]
      },
      production: {
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }]
        ]
      }
    }
  };
};
