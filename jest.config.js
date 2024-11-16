// jest.config.js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
          '@babel/plugin-proposal-export-namespace-from',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/lib/$1',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-web|@react-native-community|@react-navigation|lucide-react)/)',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  roots: ['<rootDir>'],
  testMatch: [
    '**/lib/__tests__/**/*.[jt]s?(x)',
    '**/lib/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  moduleDirectories: ['node_modules', 'lib'],
  injectGlobals: true,
  verbose: true,
  globals: {
    __DEV__: true,
  },
};
