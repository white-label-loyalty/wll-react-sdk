import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { PointsTile } from './index';

export const PointsTileMock: Tile = {
  id: '1',
  type: TileType.Points,
  active: true,
  createdAt: '2025-01-26T11:13:38Z',
  updatedAt: '2025-01-26T11:13:38Z',
  tileHeight: TileHeight.Full,
  priority: 1,
  configuration: {
    title: 'Available Points',
    points: 1000,
    pointsPrefix: '',
    pointsSuffix: ' pts',
    artworkUrl: 'https://example.com/points.png',
  },
};

describe('<PointsTile />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<PointsTile tile={PointsTileMock} />);
    expect(container).toMatchSnapshot();
  });
});

describe('PointsTile Rendering States', () => {
  it('returns null when tile is not active', () => {
    const inactiveTile = {
      ...PointsTileMock,
      active: false,
    };
    const { container } = render(<PointsTile tile={inactiveTile} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders in full size mode correctly', () => {
    const fullSizeTile = { ...PointsTileMock, tileHeight: TileHeight.Full };
    const { getByTestId } = render(<PointsTile tile={fullSizeTile} />);
    expect(getByTestId('points-tile-media')).toBeInTheDocument();
    expect(getByTestId('points-tile-title')).toBeInTheDocument();
    expect(getByTestId('points-tile-points')).toBeInTheDocument();
  });

  it('renders in compact mode correctly', () => {
    const compactTile = { ...PointsTileMock, tileHeight: TileHeight.Half };
    const { getByTestId } = render(<PointsTile tile={compactTile} />);
    expect(getByTestId('points-tile-media')).toBeInTheDocument();
    expect(getByTestId('points-tile-title')).toBeInTheDocument();
    expect(getByTestId('points-tile-points')).toBeInTheDocument();
  });
});

describe('<PointsTile /> Content', () => {
  it('displays the correct title', () => {
    render(<PointsTile tile={PointsTileMock} />);
    const titleElement = screen.getByTestId('points-tile-title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toBe('Available Points');
  });

  it('applies points multiplier correctly', () => {
    const multiplierTile = {
      ...PointsTileMock,
      configuration: {
        ...PointsTileMock.configuration,
        pointsMultiplier: 2,
      },
    };
    render(<PointsTile tile={multiplierTile} />);
    const valueElement = screen.getByTestId('points-tile-value');
    expect(valueElement.textContent).toBe('2000');
  });

  it('handles decimal multipliers', () => {
    const decimalMultiplierTile = {
      ...PointsTileMock,
      configuration: {
        ...PointsTileMock.configuration,
        pointsMultiplier: 0.5,
      },
    };
    render(<PointsTile tile={decimalMultiplierTile} />);
    const valueElement = screen.getByTestId('points-tile-value');
    expect(valueElement.textContent).toBe('500');
  });

  it('handles string multipliers', () => {
    const stringMultiplierTile = {
      ...PointsTileMock,
      configuration: {
        ...PointsTileMock.configuration,
        pointsMultiplier: 3,
      },
    };
    render(<PointsTile tile={stringMultiplierTile} />);
    const valueElement = screen.getByTestId('points-tile-value');
    expect(valueElement.textContent).toBe('3000');
  });

  it('defaults to 1x multiplier when multiplier is invalid', () => {
    const invalidMultiplierTile = {
      ...PointsTileMock,
      configuration: {
        ...PointsTileMock.configuration,
        pointsMultiplier: 'a-string',
      },
    };
    render(<PointsTile tile={invalidMultiplierTile} />);
    const valueElement = screen.getByTestId('points-tile-value');
    expect(valueElement.textContent).toBe('1000');
  });
});
