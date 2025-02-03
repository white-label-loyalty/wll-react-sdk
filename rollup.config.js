import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const external = [
  'react',
  'react-dom',
  'react-native',
  'react-native-web',
  'color',
  'lucide-react',
  'zod',
];

const baseConfig = {
  input: 'lib/index.ts',
  external,
};

export default [
  {
    ...baseConfig,
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist',
      }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        configFile: './babel.config.rollup.js',
        include: ['lib/**/*'],
        exclude: 'node_modules/**',
      }),
    ],
  },
  {
    ...baseConfig,
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
