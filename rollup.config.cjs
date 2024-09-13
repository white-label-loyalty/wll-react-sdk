import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: 'lib/index.ts',
    output: {
      file: 'tiles-sdk.js',
      format: 'cjs',
      sourcemap: true,
    },
    external: ['react-native-web'],
    plugins: [typescript()],
  },
  // {
  //   input: 'lib/index.ts',
  //   output: [
  //     {
  //       file: packageJson.main,
  //       format: 'cjs',
  //       sourcemap: true,
  //     },
  //     {
  //       file: packageJson.module,
  //       format: 'esm',
  //       sourcemap: true,
  //     },
  //   ],
  //   plugins: [
  //     resolve({ extensions }),
  //     commonjs(),
  //     typescript({ tsconfig: './tsconfig.json' }),
  //     babel({
  //       babelHelpers: 'bundled',
  //       exclude: 'node_modules/**',
  //       extensions,
  //       presets: ['@babel/preset-react', '@babel/preset-typescript'],
  //       plugins: ['@babel/plugin-proposal-class-properties'],
  //     }),
  //   ],
  //   external: [
  //     'react',
  //     'react-dom',
  //     'react-native',
  //     'react-native-web',
  //   ],
  // },
  // {
  //   input: 'dist/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'es' }],
  //   plugins: [dts()],
  // },
];
