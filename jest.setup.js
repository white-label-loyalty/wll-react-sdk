import '@testing-library/jest-dom';
import '@testing-library/jest-native/extend-expect';

// Suppress specific console warnings during tests
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  // Add any warning messages you want to filter here
  const warningsToSuppress = [
    'accessibilityLabel',
    'aria-label',
    'style.resizeMode is deprecated'
  ];

  // Check if the warning message includes any of the suppressed warnings
  const shouldSuppress = warningsToSuppress.some(warning => 
    args.some(arg => typeof arg === 'string' && arg.includes(warning))
  );

  if (!shouldSuppress) {
    originalConsoleWarn(...args);
  }
};
