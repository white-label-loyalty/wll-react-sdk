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

const createConfig = (platform) => ({
  input: 'lib/index.ts',
  external,
  output: {
    file: `dist/${platform}/index.js`,
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  plugins: [
    resolve({ extensions }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: platform === 'web',
      declarationDir: platform === 'web' ? './dist/web' : undefined,
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      plugins: [
        [
          'module-resolver',
          {
            root: ['.'],
            alias: {
              '^react-native$': platform === 'web' ? 'react-native-web' : 'react-native',
            },
          },
        ],
      ],
      include: ['lib/**/*'],
      exclude: 'node_modules/**',
    }),
  ],
});

export default [
  // Web build
  createConfig('web'),
  // React Native build
  createConfig('native'),
  // Types
  {
    input: 'lib/index.ts',
    external,
    output: {
      file: 'dist/web/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
