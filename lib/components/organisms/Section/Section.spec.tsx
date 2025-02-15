import React from 'react';
import { createSectionMock } from '../../../mocks/section';
import { createTileMock } from '../../../mocks/tiles';
import { TileHeight, TileType } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import Section from './index';

const contentTile = createTileMock(TileType.Content, {
  title: 'Welcome to Platinum Status',
  body: 'Enjoy premium benefits including priority check-in, lounge access, and complimentary upgrades. Your elite journey begins here.',
  artworkUrl: 'https://ucarecdn.com/b129c5c2-08fd-4962-83b1-5c35301148c1/',
  tileHeight: TileHeight.Full,
});

const sectionMock = createSectionMock({
  tiles: [contentTile],
});

describe('<Section/>', () => {
  it('matches snapshot', () => {
    const { container } = render(<Section section={sectionMock} />);
    expect(container).toMatchSnapshot();
  });
});
