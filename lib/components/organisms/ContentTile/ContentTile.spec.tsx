import React from 'react';
import { createContentTileMock } from '../../../mocks/tiles';
import { TileHeight } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { ContentTile } from './index';
import { getContentTileMediaContainerStyle } from './content-tile-media';

const ContentTileMock = createContentTileMock();

describe('<ContentTile />', () => {
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

describe('<ContentTile /> Rendering States', () => {
  it('if full-size tile has no artwork, content should be rendered', () => {
    const fullSizeTileWithNoArtwork = createContentTileMock({
      tileHeight: TileHeight.Full,
      artworkUrl: undefined,
    });
    const { queryByTestId } = render(
      <ContentTile tile={fullSizeTileWithNoArtwork} />
    );
    expect(queryByTestId('content-tile-title')).toBeTruthy();
    expect(queryByTestId('content-tile-summary')).toBeTruthy();
  });

  it('if half-size tile has artwork, content should be null', () => {
    const halfSizeTileWithArtwork = createContentTileMock({
      tileHeight: TileHeight.Half,
      artworkUrl:
        'https://images.pexels.com/photos/352097/pexels-photo-352097.jpeg',
    });
    const { queryByTestId } = render(
      <ContentTile tile={halfSizeTileWithArtwork} />
    );
    expect(queryByTestId('tile-content')).toBeNull();
  });

  it('uses a square aspect ratio for artwork-only media', () => {
    expect(getContentTileMediaContainerStyle(true)).toMatchObject({
      flexBasis: '100%',
      aspectRatio: 1,
    });
  });

  it('handles inactive tile gracefully', () => {
    const inactiveTile = createContentTileMock({
      active: false,
    });

    const { container } = render(<ContentTile tile={inactiveTile} />);
    expect(container.firstChild).toBeNull();
  });
});
