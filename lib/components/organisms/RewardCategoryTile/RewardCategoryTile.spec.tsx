import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import { createRewardCategoryTileMock } from '../../../mocks/tiles/rewardCategoryTile';
import { render } from '../../__test__/test-utils';
import { RewardCategoryTile } from './index';

const RewardCategoryTileMock = createRewardCategoryTileMock();

describe('<RewardCategoryTile />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <RewardCategoryTile tile={RewardCategoryTileMock} />
    );
    expect(container).toMatchSnapshot();
  });
});

describe('<RewardCategoryTile /> Content', () => {
  it('renders category name when showName is true', () => {
    render(<RewardCategoryTile tile={RewardCategoryTileMock} />);
    const rewardCategoryHeader = screen.getByTestId('reward-category-header');
    expect(rewardCategoryHeader.textContent).toBe('Restaurant Rewards');
  });

  it('does not render category name when showName is false', () => {
    const mockWithoutName = createRewardCategoryTileMock({
      showName: false,
    });
    const { queryByTestId } = render(
      <RewardCategoryTile tile={mockWithoutName} />
    );
    const rewardCategoryHeader = queryByTestId('reward-category-header');
    expect(rewardCategoryHeader).not.toBeInTheDocument();
  });
});

describe('<RewardCategoryTile /> Media', () => {
  it('renders the artwork image', () => {
    const { getByTestId } = render(
      <RewardCategoryTile tile={RewardCategoryTileMock} />
    );
    expect(getByTestId('reward-category-media')).toBeInTheDocument();
  });

  it('handles missing artworkUrl gracefully', () => {
    const mockWithoutArtwork = createRewardCategoryTileMock({
      artworkUrl: '',
    });
    const { queryByTestId } = render(
      <RewardCategoryTile tile={mockWithoutArtwork} />
    );
    expect(queryByTestId('reward-category-media')).not.toBeInTheDocument();
  });
});

describe('<RewardCategoryTile /> Edge Cases', () => {
  it('handles missing name gracefully', () => {
    const mockWithoutName = createRewardCategoryTileMock({
      name: undefined,
    });
    const { queryByTestId } = render(
      <RewardCategoryTile tile={mockWithoutName} />
    );
    expect(queryByTestId('reward-category-header')).not.toBeInTheDocument();
  });

  it('handles inactive tile gracefully', () => {
    const mockInactiveTile = createRewardCategoryTileMock({
      active: false,
    });
    const { container } = render(
      <RewardCategoryTile tile={mockInactiveTile} />
    );
    expect(container.firstChild).toBeNull();
  });
});
