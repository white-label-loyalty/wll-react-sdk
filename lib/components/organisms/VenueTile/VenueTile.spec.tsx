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
  it('renders correctly when artworkUrl and showArtwork are provided', () => {
    const { getByTestId } = render(<VenueTile tile={VenueTileMock} />);
    expect(getByTestId('venue-tile-media')).toBeInTheDocument();
  });

  it('does not render when artworkUrl is missing', () => {
    const tileWithoutArtwork = createVenueTileMock({
      artworkUrl: undefined,
    });
    const { queryByTestId } = render(<VenueTile tile={tileWithoutArtwork} />);
    expect(queryByTestId('venue-tile-media')).not.toBeInTheDocument();
  });

  it('does not render when description is missing', () => {
    const tileWithoutDescription = createVenueTileMock({
      description: undefined,
    });
    const { queryByTestId } = render(<VenueTile tile={tileWithoutDescription} />);
    expect(queryByTestId('venue-tile-description')).not.toBeInTheDocument();
  });
});

