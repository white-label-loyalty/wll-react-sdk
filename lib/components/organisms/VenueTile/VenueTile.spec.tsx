import React from 'react';
import { TileHeight } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { VenueTile } from './index';
import { createVenueTileMock } from '../../../mocks/tiles/venueTile';

const VenueTileMock = createVenueTileMock();

describe('<VenueTile />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<VenueTile tile={VenueTileMock} />);
    expect(container).toMatchSnapshot();
  });
});

describe('<VenueTile /> Rendering States', () => {
  describe('Size-based rendering', () => {
    it('renders correctly in full size mode', () => {
      const { getByTestId } = render(<VenueTile tile={VenueTileMock} />);

      expect(getByTestId('venue-tile-media')).toBeInTheDocument();
      expect(getByTestId('venue-tile-title')).toBeInTheDocument();
      expect(getByTestId('venue-tile-description')).toBeInTheDocument();
    });

    it('should not render a half-height tile', () => {
      const halfHeightTile = {
        ...VenueTileMock,
        tileHeight: TileHeight.Half,
      };
      const { container } = render(<VenueTile tile={halfHeightTile} />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});

describe('<VenueTile /> Media', () => {
  it('renders correctly when artworkUrl is provided', () => {
    const { getByTestId } = render(<VenueTile tile={VenueTileMock} />);
    expect(getByTestId('venue-tile-media')).toBeInTheDocument();
  });

  it('renders media container even when artworkUrl is missing', () => {
    const tileWithoutArtwork = createVenueTileMock({
      artworkUrl: undefined,
    });
    const { getByTestId } = render(<VenueTile tile={tileWithoutArtwork} />);
    expect(getByTestId('venue-tile-media')).toBeInTheDocument();
  });

  it('renders pin overlay when media is present', () => {
    const tileWithArtwork = createVenueTileMock({
      artworkUrl: 'https://example.com/image.jpg',
    });
    const { getByTestId } = render(<VenueTile tile={tileWithArtwork} />);
    expect(getByTestId('pin-overlay')).toBeInTheDocument();
  });

  it('renders centered pin icon when media is missing and not locked', () => {
    const tileWithoutArtwork = createVenueTileMock({
      artworkUrl: undefined,
      isLocked: false,
    });
    const { getByTestId, queryByTestId } = render(
      <VenueTile tile={tileWithoutArtwork} />
    );
    expect(getByTestId('lock-overlay')).toBeInTheDocument();
    // The small pin overlay should NOT be there
    expect(queryByTestId('pin-overlay')).not.toBeInTheDocument();
  });

  it('renders lock icon centered (and no pin overlay) when locked even if no media', () => {
    const lockedTileWithoutArtwork = createVenueTileMock({
      artworkUrl: undefined,
      isLocked: true,
    });
    const { getByTestId } = render(
      <VenueTile tile={lockedTileWithoutArtwork} />
    );
    expect(getByTestId('lock-overlay')).toBeInTheDocument();
    expect(getByTestId('pin-overlay')).toBeInTheDocument();
  });

  it('renders lock overlay always', () => {
    const unlockedTile = createVenueTileMock({ isLocked: false });
    const { getByTestId } = render(<VenueTile tile={unlockedTile} />);
    expect(getByTestId('lock-overlay')).toBeInTheDocument();
  });

  it('does not render when description is missing', () => {
    const tileWithoutDescription = createVenueTileMock({
      description: undefined,
    });
    const { queryByTestId } = render(
      <VenueTile tile={tileWithoutDescription} />
    );
    expect(queryByTestId('venue-tile-description')).not.toBeInTheDocument();
  });
});
