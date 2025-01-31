import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import { TileHeight, TileType } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { RewardCategoryTile } from './index';

export const RewardCategoryTileMock = {
  tileHeight: TileHeight.Full,
  active: true,
  type: TileType.RewardCategory,
  configuration: {
    showName: true,
    rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
    artworkUrl:
      'https://images.pexels.com/photos/1850595/pexels-photo-1850595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name: 'Restaurant Rewards',
  },
  id: 'f57f2f98-cabf-4b81-82ac-a0249172d65c',
  createdAt: '2024-10-18T14:40:37.835Z',
  updatedAt: '2024-10-18T14:40:37.835Z',
  priority: 8,
};

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
    const mockWithoutName = {
      ...RewardCategoryTileMock,
      configuration: {
        ...RewardCategoryTileMock.configuration,
        showName: false,
      },
    };
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
    const mockWithoutArtwork = {
      ...RewardCategoryTileMock,
      configuration: {
        ...RewardCategoryTileMock.configuration,
        artworkUrl: '',
      },
    };
    const { queryByTestId } = render(
      <RewardCategoryTile tile={mockWithoutArtwork} />
    );
    expect(queryByTestId('reward-category-media')).not.toBeInTheDocument();
  });
});

describe('<RewardCategoryTile /> Edge Cases', () => {
  it('handles missing name gracefully', () => {
    const mockWithoutName = {
      ...RewardCategoryTileMock,
      configuration: {
        ...RewardCategoryTileMock.configuration,
        name: undefined,
      },
    };
    const { queryByTestId } = render(
      <RewardCategoryTile tile={mockWithoutName} />
    );
    expect(queryByTestId('reward-category-header')).not.toBeInTheDocument();
  });

  it('handles inactive tile gracefully', () => {
    const mockInactiveTile = {
      ...RewardCategoryTileMock,
      active: false,
    };
    const { container } = render(
      <RewardCategoryTile tile={mockInactiveTile} />
    );
    expect(container.firstChild).toBeNull();
  });
});
