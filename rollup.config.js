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
  // Native bundle
  {
    ...baseConfig,
    output: {
      file: 'dist/native.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
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
  // Web bundle
  {
    ...baseConfig,
    output: {
      file: 'dist/web.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
      }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        configFile: './babel.config.web.rollup.js',
        include: ['lib/**/*'],
        exclude: 'node_modules/**',
      }),
    ],
  },
  // Types bundle
  {
    ...baseConfig,
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
