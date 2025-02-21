module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {},
        extensions: ['.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx'],
      },
    ],
  ],
};
