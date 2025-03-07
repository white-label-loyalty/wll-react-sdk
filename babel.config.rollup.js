module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native',
          '^react-dom$': 'react-native',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.native.js',
          '.js',
          '.ios.ts',
          '.android.ts',
          '.native.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.native.tsx',
          '.tsx',
        ],
      },
    ],
  ],
};
