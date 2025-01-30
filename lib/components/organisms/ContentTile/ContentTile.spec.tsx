import React from 'react';
import { Tile, TileHeight, TileType } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { ContentTile } from './index';

export const ContentTileMock: Tile = {
  id: '1',
  type: TileType.Content,
  active: true,
  createdAt: '',
  updatedAt: '',
  tileHeight: TileHeight.Full,
  priority: 1,
  configuration: {
    title: 'Gold Tier Unlocked!',
    body: "You've unlocked exclusive Gold member benefits including 2X points on every purchase, priority support, and VIP event access.",
    artworkUrl:
      'https://images.pexels.com/photos/352097/pexels-photo-352097.jpeg',
  },
};

describe('<RewardTile />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<ContentTile tile={ContentTileMock} />);
    expect(container).toMatchSnapshot();
  });

  it('handles inactive tile gracefully', () => {
    const { container } = render(
      <ContentTile tile={{ ...ContentTileMock, active: false }} />
    );

    expect(container.firstChild).toBeNull();
  });
});

describe('<RewardTile /> Rendering States', () => {
  it('if full-size tile has no artwork, content should be rendered', () => {
    const fullSizeTileWithNoArtwork = {
      ...ContentTileMock,
      tileHeight: TileHeight.Full,
      configuration: {
        ...ContentTileMock.configuration,
        artworkUrl: null,
      },
    };
    const { queryByTestId } = render(
      <ContentTile tile={fullSizeTileWithNoArtwork} />
    );
    expect(queryByTestId('tile-content')).toBeTruthy();
  });

  it('if half-size tile has artwork, content should be null', () => {
    const halfSizeTileWithArtwork = {
      ...ContentTileMock,
      tileHeight: TileHeight.Half,
      configuration: {
        ...ContentTileMock.configuration,
        artworkUrl:
          'https://images.pexels.com/photos/352097/pexels-photo-352097.jpeg',
      },
    };
    const { queryByTestId } = render(
      <ContentTile tile={halfSizeTileWithArtwork} />
    );
    expect(queryByTestId('tile-content')).toBeNull();
  });

  it('handles inactive tile gracefully', () => {
    const { container } = render(
      <ContentTile tile={{ ...ContentTileMock, active: false }} />
    );

    expect(container.firstChild).toBeNull();
  });
});
