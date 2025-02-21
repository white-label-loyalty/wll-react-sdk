module.exports = (api) => {
  const isTest = api.env('test');

  return {
    presets: [
      ['@babel/preset-env', { modules: false }],
      '@babel/preset-typescript',
      ['@babel/preset-react', { runtime: 'automatic' }]
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.native.js',
            '.web.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
          ],
        },
      ],
    ],
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            { targets: { node: 'current' }, modules: 'commonjs' },
          ],
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
      production: {
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    },
  };
};
