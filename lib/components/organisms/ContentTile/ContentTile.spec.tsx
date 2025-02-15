import React from 'react';
import { createContentTileMock } from '../../../mocks/contentTile';
import { TileHeight } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { ContentTile } from './index';

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
    expect(queryByTestId('tile-content')).toBeTruthy();
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

  it('handles inactive tile gracefully', () => {
    const inactiveTile = createContentTileMock({
      active: false,
    });

    const { container } = render(<ContentTile tile={inactiveTile} />);
    expect(container.firstChild).toBeNull();
  });
});
