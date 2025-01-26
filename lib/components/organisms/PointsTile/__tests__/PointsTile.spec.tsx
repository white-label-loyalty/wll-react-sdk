/// <reference types="@testing-library/jest-dom" />

import React from 'react';
import { PointsTile } from '..';
import { Tile, TileHeight, TileType } from '../../../../types/tile';
import { render } from '../../../__test__/test-utils';

const tileMock: Tile = {
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

describe('PointsTile', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<PointsTile tile={tileMock} />);
    expect(container).toMatchSnapshot();
  });
});

describe('PointsTile Rendering States', () => {
  it('returns null when tile prop is not provided', () => {
    const { container } = render(<PointsTile tile={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders in full size mode correctly', () => {
    const fullSizeTile = { ...tileMock, tileHeight: TileHeight.Full };
    const { getByTestId } = render(<PointsTile tile={fullSizeTile} />);
    expect(getByTestId('points-tile-media')).toBeInTheDocument();
    expect(getByTestId('points-tile-title')).toBeInTheDocument();
    expect(getByTestId('points-tile-points')).toBeInTheDocument();
  });

  it('renders in compact mode correctly', () => {
    const compactTile = { ...tileMock, tileHeight: TileHeight.Half };
    const { getByTestId } = render(<PointsTile tile={compactTile} />);
    expect(getByTestId('points-tile-media')).toBeInTheDocument();
    expect(getByTestId('points-tile-title')).toBeInTheDocument();
    expect(getByTestId('points-tile-points')).toBeInTheDocument();
  });
});
