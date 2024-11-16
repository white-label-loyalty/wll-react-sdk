// jest.setup.js
require('@testing-library/jest-dom');

// Initialize Jest globals before anything else
const {
  expect,
  jest,
  describe,
  it,
  test,
  beforeEach,
  afterEach,
} = require('@jest/globals');
global.expect = expect;
global.jest = jest;
global.describe = describe;
global.it = it;
global.test = test;
global.beforeEach = beforeEach;
global.afterEach = afterEach;

// Mock react-native modules
global.jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// React Native mocks
global.jest.mock('react-native', () => {
  const RN = require('react-native');
  return {
    ...RN,
    Platform: {
      ...RN.Platform,
      OS: 'web',
      select: global.jest.fn((obj) => obj.web || obj.default),
    },
  };
});

// Mock the WllSdk context
global.jest.mock(
  './lib/context/WllSdkContext',
  () => ({
    useWllSdk: () => ({
      theme: {
        alphaDerivedPrimary: {
          20: 'rgba(0,0,0,0.2)',
        },
      },
    }),
  }),
  { virtual: true }
);

// Add necessary window globals
global.window = global;
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};
