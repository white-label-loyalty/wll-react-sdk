module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        modules: false, // Keep ES modules for Rollup
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-web',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: 'current' },
            modules: 'commonjs', // Use CommonJS for Jest tests
          },
        ],
      ],
    },
  },
};
