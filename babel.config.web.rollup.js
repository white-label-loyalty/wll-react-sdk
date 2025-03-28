module.exports = {
  presets: [
    ['@babel/preset-env', { 
      modules: false,
      targets: {
        browsers: ['> 0.25%', 'ie >= 11', 'safari >= 9']
      },
      useBuiltIns: 'usage',
      corejs: 3
    }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native': 'react-native-web',
        },
        extensions: ['.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx'],
      },
    ],
  ],
};
