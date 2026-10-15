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

  it('constrains the chip to its parent width so it cannot overflow', () => {
    const { getByTestId } = render(
      <Chip label="You haven't earned this badge yet" testID="chip" />
    );

    const chip = getByTestId('chip');

    expect(window.getComputedStyle(chip).maxWidth).toBe('100%');
  });

  it('wraps the label onto a second line by default', () => {
    const { getByText } = render(
      <Chip label="You haven't earned this badge yet" testID="chip" />
    );

    const label = getByText("You haven't earned this badge yet");

    expect(window.getComputedStyle(label).whiteSpace).not.toBe('nowrap');
  });

  it('keeps the label on a single line when numberOfLines is 1', () => {
    const { getByText } = render(
      <Chip label="Awarded 28/03/2025" numberOfLines={1} testID="chip" />
    );

    const label = getByText('Awarded 28/03/2025');

    expect(window.getComputedStyle(label).whiteSpace).toBe('nowrap');
  });
});
