import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import { createRoundupTileMock } from '../../../mocks/tiles/roundupTile';
import { TileHeight } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import { RoundupTile } from './index';

const defaultTile = createRoundupTileMock();

describe('<RoundupTile />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<RoundupTile tile={defaultTile} />);
    expect(container).toMatchSnapshot();
  });
});

describe('RoundupTile Rendering States', () => {
  it('returns null when tile is not active', () => {
    const inactiveTile = createRoundupTileMock({ active: false });
    const { container } = render(<RoundupTile tile={inactiveTile} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders in full size mode correctly', () => {
    const fullSizeTile = createRoundupTileMock({ tileHeight: TileHeight.Full });
    const { getByTestId } = render(<RoundupTile tile={fullSizeTile} />);
    expect(getByTestId('roundup-tile-media')).toBeInTheDocument();
    expect(getByTestId('roundup-tile-title')).toBeInTheDocument();
    expect(getByTestId('roundup-tile-amount')).toBeInTheDocument();
  });

  it('renders in compact mode correctly', () => {
    const compactTile = createRoundupTileMock({ tileHeight: TileHeight.Half });
    const { getByTestId } = render(<RoundupTile tile={compactTile} />);
    expect(getByTestId('roundup-tile-media')).toBeInTheDocument();
    expect(getByTestId('roundup-tile-title')).toBeInTheDocument();
    expect(getByTestId('roundup-tile-amount')).toBeInTheDocument();
  });
});

describe('<RoundupTile /> Content', () => {
  it('displays the correct title', () => {
    render(<RoundupTile tile={defaultTile} />);
    const titleElement = screen.getByTestId('roundup-tile-title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toBe('Available Points');
  });

  it('displays the correct zero points value', () => {
    const zeroPointsTile = createRoundupTileMock({ balance: 0 });
    render(<RoundupTile tile={zeroPointsTile} />);
    const valueElement = screen.getByTestId('roundup-tile-value');
    expect(valueElement.textContent).toBe('0');
  });
});
