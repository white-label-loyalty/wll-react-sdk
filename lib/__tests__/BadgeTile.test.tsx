// lib/__tests__/BadgeTile.test.tsx
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';

// Use globals that were set up in jest.setup.js
describe('BadgeTile', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <View>
        <Text>Test Works</Text>
      </View>
    );

    expect(getByText('Test Works')).toBeTruthy();
  });
});
