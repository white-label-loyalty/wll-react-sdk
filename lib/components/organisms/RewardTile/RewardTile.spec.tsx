import { screen } from '@testing-library/react';
import React from 'react';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { RewardTile } from './index';
const RewardTileMock: Tile = {
  tileHeight: TileHeight.Full,
  active: true,
  type: TileType.Reward,
  configuration: {
    rewardId: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
    showArtwork: true,
    showDetails: true,
    showPrice: true,
    name: 'Sweet Chilli Lobster Noodles',
    summary: 'Fresh Lobster Noodles with a spicy chilli sauce',
    id: 'f7ce508f-ca52-46ff-bfb7-03e3761feb4a',
    createdAt: '2023-05-05T15:11:42.342Z',
    updatedAt: '2024-07-17T10:45:04.350Z',
    pictureUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
    value: 800,
    price: 10,
    pointsPrefix: '',
    pointsSuffix: '',
    priority: 10,
    availability: {
      start: '2023-05-05T15:10:31.274Z',
      end: '',
    },
    purchasable: true,
    tier: null,
    category: {
      name: 'Chicken Salad',
      priority: 0,
      type: 'REWARD',
      id: '677b6b88-d97c-4b8d-80f4-88b04c86948f',
      createdAt: '2023-05-05T10:39:57.595Z',
      updatedAt: '2023-05-05T10:39:57.595Z',
      description: null,
      metadata: null,
      pictureUrl: 'https://ucarecdn.com/9cda5d3c-75f4-48f0-9f3f-1ece144f6136/',
    },
    discounts: [],
    redemptionMessage: null,
    visibilityCriteria: null,
    type: 'VOUCHER',
    codeType: 'HUMAN',
    code: null,
    purchaseExpiration: null,
    hideCode: false,
    notificationConfig: null,
    artworkUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
    pointsMultiplier: '1',
  },
  id: '39ac25f0-35b3-4668-acba-032dccc63e91',
  createdAt: '2024-10-17T10:50:12.673Z',
  updatedAt: '2024-10-17T10:50:12.673Z',
  priority: 3,
};

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
    const tileWithoutShowArtwork = {
      ...RewardTileMock,
      configuration: {
        ...RewardTileMock.configuration,
        showArtwork: false,
      },
    };
    const { queryByTestId } = render(
      <RewardTile tile={tileWithoutShowArtwork} />
    );
    expect(queryByTestId('reward-tile-media')).not.toBeInTheDocument();
  });

  it('does not render media when artworkUrl is missing', () => {
    const tileWithoutArtwork = {
      ...RewardTileMock,
      configuration: {
        ...RewardTileMock.configuration,
        artworkUrl: undefined,
      },
    };
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
    const tileWithoutPrice = {
      ...RewardTileMock,
      configuration: {
        ...RewardTileMock.configuration,
        showPrice: false,
      },
    };
    const { queryByTestId } = render(<RewardTile tile={tileWithoutPrice} />);
    expect(queryByTestId('reward-tile-points')).not.toBeInTheDocument();
  });

  it('calculates points correctly with default multiplier', () => {
    const { getByTestId } = render(<RewardTile tile={RewardTileMock} />);
    const pointsElement = getByTestId('reward-tile-points');
    expect(pointsElement).toHaveAccessibleName('Reward points: 10');
  });

  it('calculates points correctly with custom multiplier', () => {
    const tileWithMultiplier = {
      ...RewardTileMock,
      configuration: {
        ...RewardTileMock.configuration,
        pointsMultiplier: 200,
        pointsPrefix: '',
        pointsSuffix: 'pts',
      },
    };
    const { getByTestId } = render(<RewardTile tile={tileWithMultiplier} />);
    const pointsElement = getByTestId('reward-tile-points');
    expect(pointsElement).toHaveAccessibleName('Reward points: 2000 pts');
  });

  it('uses custom prefix and suffix when provided', () => {
    const tileWithCustomLabels = {
      ...RewardTileMock,
      configuration: {
        ...RewardTileMock.configuration,
        price: 10,
        pointsPrefix: '$',
        pointsSuffix: 'Dollars',
      },
    };
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
    const mockInactiveTile = {
      ...RewardTileMock,
      active: false,
    };
    const { container } = render(<RewardTile tile={mockInactiveTile} />);
    expect(container.firstChild).toBeNull();
  });
});
