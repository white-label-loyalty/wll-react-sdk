import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const externalPackages = [
  'react',
  'react-dom',
  'react-native',
  'react-native-web',
  'color',
  'lucide-react',
  'zod',
];
// Match bare specifiers AND any subpath (e.g. `react/jsx-runtime`,
// `react/jsx-dev-runtime`, `react-dom/client`). Plain string entries in
// rollup's `external` only match the exact specifier, which would let the
// automatic JSX runtime get inlined and pin consumers to the version of
// React the SDK was built against.
const externalPattern = new RegExp(
  `^(${externalPackages
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})(/|$)`
);
const external = (id) => externalPattern.test(id);

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
      resolve({
        extensions,
        mainFields: ['react-native', 'main'],
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist/types',
        exclude: ['node_modules/**', '**/*.spec.ts'],
        jsx: 'react-jsx',
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
      resolve({
        extensions,
        mainFields: ['browser', 'module', 'main'],
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist/types',
      }),
      babel({
        extensions,
        babelHelpers: 'bundled',
        configFile: './babel.config.web.rollup.js',
        include: ['lib/**/*'],
        exclude: ['node_modules/**', '**/*.spec.ts'],
      }),
    ],
  },
  // Types bundle
  {
    ...baseConfig,
    input: './dist/types/index.d.ts', // Read from the generated declarations
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
