module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '^react-native$': 'react-native-web'
      }
    }]
  ]
};
