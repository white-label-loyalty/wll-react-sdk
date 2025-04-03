import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import { BadgeTileType, TileHeight } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { BadgeTile } from './index';

import { createBadgeTileMock } from '../../../mocks/tiles/badgeTile';

const BadgeTileMock = createBadgeTileMock();

describe('<BadgeTile />', () => {
  it('matches snapshot', () => {
    const { container } = render(<BadgeTile tile={BadgeTileMock} />);
    expect(container).toMatchSnapshot();
  });

  describe('Rendering States', () => {
    it('returns null when tile is not active', () => {
      const inactiveTile = createBadgeTileMock({
        active: false,
      });
      const { container } = render(<BadgeTile tile={inactiveTile} />);
      expect(container).toBeEmptyDOMElement();
    });

    it('returns null when tile height is not full', () => {
      const halfHeightTile = createBadgeTileMock({
        tileHeight: TileHeight.Half,
      });
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
      const earnedBadge = createBadgeTileMock({
        count: 1,
      });
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
      const notEarnedBadge = createBadgeTileMock({
        type: BadgeTileType.Specific,
        count: 0,
      });

      render(<BadgeTile tile={notEarnedBadge} />);
      expect(
        screen.getByText(notEarnedBadge.configuration.name)
      ).toBeInTheDocument();
      expect(
        screen.getByText(notEarnedBadge.configuration.description)
      ).toBeInTheDocument();
      const message = notEarnedBadge.configuration.badgeNotEarnedMessage;
      expect(message).toBeDefined();
      expect(screen.getByText(message!)).toBeInTheDocument();
    });

    it('does not show earned/not earned chip when badgeNotEarnedMessage is not provided', () => {
      const specificBadge = createBadgeTileMock({
        type: BadgeTileType.Specific,
        count: 0,
        badgeNotEarnedMessage: undefined,
      });
      render(<BadgeTile tile={specificBadge} />);
      expect(
        screen.getByText(specificBadge.configuration.name)
      ).toBeInTheDocument();
      expect(
        screen.getByText(specificBadge.configuration.description)
      ).toBeInTheDocument();

      const badgeEarnedChip = screen.queryByTestId('badge-tile-earned-chip');
      expect(badgeEarnedChip).toBe(null);
    });

    it('renders specific badge type correctly when earned once', () => {
      const specificBadge = createBadgeTileMock({
        type: BadgeTileType.Specific,
        count: 1,
      });
      render(<BadgeTile tile={specificBadge} />);
      expect(
        screen.getByText(specificBadge.configuration.name)
      ).toBeInTheDocument();
      expect(
        screen.getByText(specificBadge.configuration.description)
      ).toBeInTheDocument();
    });

    it('renders Lock icon when not earned', () => {
      const specificBadge = createBadgeTileMock({
        type: BadgeTileType.Specific,
        count: 0,
      });
      render(<BadgeTile tile={specificBadge} />);
      const message = specificBadge.configuration.badgeNotEarnedMessage;
      expect(message).toBeDefined();
      expect(screen.getByText(message!)).toBeInTheDocument();
      expect(
        screen.getByTestId('badge-tile-status-locked')
      ).toBeInTheDocument();
    });

    it('renders specific badge type correctly with multiple earned', () => {
      const specificBadge = createBadgeTileMock({
        type: BadgeTileType.Specific,
        count: 3,
      });
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
      const media = screen.getByTestId('badge-tile-media');
      expect(media).toBeInTheDocument();
      const progressiveImage = media.querySelector('[src]');
      expect(progressiveImage).toHaveAttribute(
        'src',
        BadgeTileMock.configuration.artworkUrl
      );
    });

    it('always uses main artworkUrl regardless of earned state', () => {
      const unearned = createBadgeTileMock({
        count: 0,
      });
      render(<BadgeTile tile={unearned} />);
      const media = screen.getByTestId('badge-tile-media');
      expect(media).toBeInTheDocument();
      const progressiveImage = media.querySelector('[src]');
      expect(progressiveImage).toHaveAttribute(
        'src',
        unearned.configuration.artworkUrl
      );
    });
  });

  describe('Badge Date Earned', () => {
    it('renders the correct date format', () => {
      const earnedDate = '2025-03-28T11:45:38.555Z';
      const earnedBadge = createBadgeTileMock({
        count: 1,
        lastEarnedAt: earnedDate,
      });

      render(<BadgeTile tile={earnedBadge} />);

      const dateElement = screen.getByTestId('badge-tile-date-earned');
      expect(dateElement).toBeInTheDocument();

      expect(dateElement.textContent).toContain('Awarded 28/03/2025');
    });

    it('formats date according to locale', () => {
      const earnedDate = '2025-03-28T11:45:38.555Z';
      const earnedBadge = createBadgeTileMock({
        count: 1,
        lastEarnedAt: earnedDate,
        locale: 'us',
      });

      render(<BadgeTile tile={earnedBadge} />);

      const dateElement = screen.getByTestId('badge-tile-date-earned');
      expect(dateElement).toBeInTheDocument();

      expect(dateElement.textContent).toContain('Awarded 3/28/2025');
    });

    it('shows not earned message when count is 0', () => {
      const notEarnedBadge = createBadgeTileMock({
        count: 0,
        type: BadgeTileType.Specific,
        badgeNotEarnedMessage: 'Badge not earned yet',
      });

      render(<BadgeTile tile={notEarnedBadge} />);

      const dateElement = screen.getByTestId('badge-tile-date-earned');
      expect(dateElement).toBeInTheDocument();
      expect(dateElement.textContent).toBe('Badge not earned yet');
    });

    it('does not render date for Latest type with count=0', () => {
      const latestBadge = createBadgeTileMock({
        count: 0,
        type: BadgeTileType.Latest,
      });

      render(<BadgeTile tile={latestBadge} />);

      expect(
        screen.queryByTestId('badge-tile-date-earned')
      ).not.toBeInTheDocument();
    });
  });
});
