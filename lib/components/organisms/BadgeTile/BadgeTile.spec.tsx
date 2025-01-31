import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import { BadgeTileType, TileHeight, TileType } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { BadgeTile } from './index';

const BadgeTileMock = {
  id: 'latest-badge-none',
  type: TileType.Badge,
  active: true,
  createdAt: '2024-08-06T08:53:24.307Z',
  updatedAt: '2024-08-06T08:53:24.307Z',
  tileHeight: TileHeight.Full,
  priority: 0,
  configuration: {
    type: BadgeTileType.Latest,
    badgeId: '900a2477-95c4-4c42-ae2d-3795e7f0f5f2',
    internalName: 'Top Spender',
    name: 'Top Spender',
    description: 'Spent £100 on 5 Separate transactions',
    artworkUrl: 'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
    priority: 0,
    status: 'ACTIVE',
    createdAt: '2024-08-06T08:53:24.307Z',
    updatedAt: '2024-08-06T08:53:24.307Z',
    awardedDatePrefix: 'Awarded',
    emptyBadgeMessage: "You haven't earned any badges yet.",
    badgeNotEarnedMessage: 'Badge not earned yet',
    emptyBadgeArtworkUrl:
      'https://ucarecdn.com/3d3731b2-faec-4779-9cd8-3691631d280c/',
    count: 0,
  },
};

describe('<BadgeTile />', () => {
  it('matches snapshot', () => {
    const { container } = render(<BadgeTile tile={BadgeTileMock} />);
    expect(container).toMatchSnapshot();
  });

  describe('Rendering States', () => {
    it('returns null when tile is not active', () => {
      const inactiveTile = {
        ...BadgeTileMock,
        active: false,
      };
      const { container } = render(<BadgeTile tile={inactiveTile} />);
      expect(container).toBeEmptyDOMElement();
    });

    it('returns null when tile height is not full', () => {
      const halfHeightTile = {
        ...BadgeTileMock,
        tileHeight: TileHeight.Half,
      };
      const { container } = render(<BadgeTile tile={halfHeightTile} />);
      expect(container).toBeEmptyDOMElement();
    });

    it('renders correctly for Latest badge type with no badges earned', () => {
      render(<BadgeTile tile={BadgeTileMock} />);
      expect(
        screen.getByText(BadgeTileMock.configuration.emptyBadgeMessage)
      ).toBeInTheDocument();
      expect(screen.getByTestId('badge-tile-media')).toBeInTheDocument();
    });

    it('renders correctly for Latest badge type with badges earned', () => {
      const earnedBadge = {
        ...BadgeTileMock,
        configuration: {
          ...BadgeTileMock.configuration,
          count: 1,
        },
      };
      render(<BadgeTile tile={earnedBadge} />);
      expect(
        screen.getByText(earnedBadge.configuration.name)
      ).toBeInTheDocument();
      expect(
        screen.getByText(earnedBadge.configuration.description)
      ).toBeInTheDocument();
      expect(screen.getByTestId('badge-tile-media')).toBeInTheDocument();
    });
  });

  describe('Badge Types', () => {
    it('renders specific badge type correctly when not earned', () => {
      const specificBadge = {
        ...BadgeTileMock,
        configuration: {
          ...BadgeTileMock.configuration,
          type: BadgeTileType.Specific,
          count: 0,
        },
      };
      render(<BadgeTile tile={specificBadge} />);
      expect(
        screen.getByText(specificBadge.configuration.badgeNotEarnedMessage)
      ).toBeInTheDocument();
    });

    it('renders specific badge type correctly when earned once', () => {
      const specificBadge = {
        ...BadgeTileMock,
        configuration: {
          ...BadgeTileMock.configuration,
          type: BadgeTileType.Specific,
          count: 1,
        },
      };
      render(<BadgeTile tile={specificBadge} />);
      expect(
        screen.getByText(specificBadge.configuration.name)
      ).toBeInTheDocument();
      expect(
        screen.getByText(specificBadge.configuration.description)
      ).toBeInTheDocument();
    });

    it('renders Lock icon when not earned', () => {
      const specificBadge = {
        ...BadgeTileMock,
        configuration: {
          ...BadgeTileMock.configuration,
          type: BadgeTileType.Specific,
          count: 0,
        },
      };
      render(<BadgeTile tile={specificBadge} />);
      expect(
        screen.getByText(specificBadge.configuration.badgeNotEarnedMessage)
      ).toBeInTheDocument();
      expect(
        screen.getByTestId('badge-tile-status-locked')
      ).toBeInTheDocument();
    });

    it('renders specific badge type correctly with multiple earned', () => {
      const specificBadge = {
        ...BadgeTileMock,
        configuration: {
          ...BadgeTileMock.configuration,
          type: BadgeTileType.Specific,
          count: 3,
        },
      };
      render(<BadgeTile tile={specificBadge} />);
      expect(
        screen.getByText(specificBadge.configuration.name)
      ).toBeInTheDocument();
      expect(screen.getByText('3x')).toBeInTheDocument();
    });
  });

  describe('Badge Media', () => {
    it('renders badge artwork when provided', () => {
      render(<BadgeTile tile={BadgeTileMock} />);
      expect(screen.getByTestId('badge-tile-media')).toBeInTheDocument();
    });

    it('renders empty badge artwork when no badges earned', () => {
      const emptyBadge = {
        ...BadgeTileMock,
        configuration: {
          ...BadgeTileMock.configuration,
          count: 0,
        },
      };
      render(<BadgeTile tile={emptyBadge} />);
      const media = screen.getByTestId('badge-tile-media');
      expect(media).toBeInTheDocument();

      const progressiveImage = media.querySelector('[src]');
      expect(progressiveImage).toHaveAttribute(
        'src',
        emptyBadge.configuration.emptyBadgeArtworkUrl
      );
    });
  });
});
