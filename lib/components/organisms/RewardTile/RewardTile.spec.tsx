import { screen } from '@testing-library/react';
import React from 'react';
import { createRewardTileMock } from '../../../mocks/rewardTile';
import { TileHeight } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { RewardTile } from './index';

const RewardTileMock = createRewardTileMock();

describe('<RewardTile />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<RewardTile tile={RewardTileMock} />);
    expect(container).toMatchSnapshot();
  });
});

describe('<RewardTile /> Rendering States', () => {
  describe('Size-based rendering', () => {
    it('renders correctly in full size mode', () => {
      const { getByTestId } = render(<RewardTile tile={RewardTileMock} />);

      expect(getByTestId('reward-tile-media')).toBeInTheDocument();
      expect(getByTestId('reward-tile-title')).toBeInTheDocument();
      expect(getByTestId('reward-tile-summary')).toBeInTheDocument();
    });

    it('should not render a half-height tile', () => {
      const halfHeightTile = {
        ...RewardTileMock,
        tileHeight: TileHeight.Half,
      };
      const { container } = render(<RewardTile tile={halfHeightTile} />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});

describe('<RewardTile /> Media', () => {
  it('renders correctly when artworkUrl and showArtwork are provided', () => {
    const { getByTestId } = render(<RewardTile tile={RewardTileMock} />);
    expect(getByTestId('reward-tile-media')).toBeInTheDocument();
  });

  it('does not render when showArtwork is false', () => {
    const tileWithoutShowArtwork = createRewardTileMock({
      showArtwork: false,
    });
    const { queryByTestId } = render(
      <RewardTile tile={tileWithoutShowArtwork} />
    );
    expect(queryByTestId('reward-tile-media')).not.toBeInTheDocument();
  });

  it('does not render media when artworkUrl is missing', () => {
    const tileWithoutArtwork = createRewardTileMock({
      artworkUrl: undefined,
    });
    const { queryByTestId } = render(<RewardTile tile={tileWithoutArtwork} />);
    expect(queryByTestId('reward-tile-media')).not.toBeInTheDocument();
  });
});

describe('<RewardTile /> Points', () => {
  it('renders points when showPrice is true', () => {
    const { getByTestId } = render(<RewardTile tile={RewardTileMock} />);
    expect(getByTestId('reward-tile-points')).toBeInTheDocument();
  });

  it('does not render points when showPrice is false', () => {
    const tileWithoutPrice = createRewardTileMock({
      showPrice: false,
    });
    const { queryByTestId } = render(<RewardTile tile={tileWithoutPrice} />);
    expect(queryByTestId('reward-tile-points')).not.toBeInTheDocument();
  });

  it('calculates points correctly with default multiplier', () => {
    const { getByTestId } = render(<RewardTile tile={RewardTileMock} />);
    const pointsElement = getByTestId('reward-tile-points');
    expect(pointsElement).toHaveAccessibleName('Reward points: 10');
  });

  it('calculates points correctly with custom multiplier', () => {
    const tileWithMultiplier = createRewardTileMock({
      pointsMultiplier: 200,
      pointsPrefix: '',
      pointsSuffix: 'pts',
    });
    const { getByTestId } = render(<RewardTile tile={tileWithMultiplier} />);
    const pointsElement = getByTestId('reward-tile-points');
    expect(pointsElement).toHaveAccessibleName('Reward points: 2000 pts');
  });

  it('uses custom prefix and suffix when provided', () => {
    const tileWithCustomLabels = createRewardTileMock({
      price: 10,
      pointsPrefix: '$',
      pointsSuffix: 'Dollars',
    });
    const { getByTestId } = render(<RewardTile tile={tileWithCustomLabels} />);
    const pointsElement = getByTestId('reward-tile-points');
    const pointsValue = screen.getByTestId('reward-tile-points-value');
    expect(pointsValue.textContent).toBe('10');
    expect(pointsElement).toHaveAccessibleName('Reward points: $ 10 Dollars');
  });

  it('handles empty prefix and suffix correctly', () => {
    const { getByTestId } = render(<RewardTile tile={RewardTileMock} />);
    const pointsElement = getByTestId('reward-tile-points');
    expect(pointsElement).toHaveAccessibleName('Reward points: 10');
  });

  it('handles inactive tile gracefully', () => {
    const mockInactiveTile = createRewardTileMock({
      active: false,
    });
    const { container } = render(<RewardTile tile={mockInactiveTile} />);
    expect(container.firstChild).toBeNull();
  });
});
