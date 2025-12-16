import Color from 'color';
import React from 'react';
import { render } from '../../__test__/test-utils';
import { defaultTheme } from '../../../utils/styling';
import Chip from './index';
import { StatusVariant } from '../../../types/tile';

describe('<Chip />', () => {
  it('renders a string label with default styling and accessibility attributes', () => {
    const { getByTestId } = render(<Chip label="Active" testID="chip" />);

    const chip = getByTestId('chip');
    const expectedBackground = Color(defaultTheme.primary).alpha(0.1).string();
    const computedBackground = window
      .getComputedStyle(chip)
      .backgroundColor.replace(/\s/g, '');

    expect(chip).toHaveAttribute('aria-live', 'polite');
    expect(chip).toHaveAccessibleName('Active');
    expect(computedBackground).toBe(expectedBackground.replace(/\s/g, ''));
  });

  it('applies the green variant styles', () => {
    const { getByTestId } = render(
      <Chip label="Completed" variant={StatusVariant.GREEN} testID="chip" />
    );

    const chip = getByTestId('chip');
    const background = window.getComputedStyle(chip).backgroundColor;

    expect(Color(background).hex().toLowerCase()).toBe('#d1f0e1');
    expect(chip).toHaveAccessibleName('Completed');
  });

  it('maps ariaLive="off" to aria-live="off"', () => {
    const { getByTestId } = render(
      <Chip label="Pending" ariaLive="off" testID="chip" />
    );

    const chip = getByTestId('chip');

    expect(chip).toHaveAttribute('aria-live', 'off');
  });
});
