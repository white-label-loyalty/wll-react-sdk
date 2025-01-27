import '@testing-library/jest-dom';
import React from 'react';
import { SectionType } from '../../../types/section';
import { TileHeight, TileType } from '../../../types/tile';
import { render } from '../../__test__/test-utils';
import Grid from './index';

const mockSection = {
  id: 'test-section',
  name: 'Misc Tiles',
  type: SectionType.Grid,
  active: true,
  createdAt: '2025-01-27T18:31:01Z',
  updatedAt: '2025-01-27T18:31:01Z',
  visibilityCriteria: null,
  priority: 5,
  title: 'Profile',
  description:
    'Welcome to WLL Explorer! Find out more about our exciting loyalty program.',
  defaultLocale: 'en',
  locale: 'en',
  tiles: [
    {
      id: '1',
      type: TileType.Badge,
      active: true,
      tileHeight: TileHeight.Full,
      priority: 2,
      configuration: {
        name: 'Badge Title',
        description: 'Badge Description',
      },
      createdAt: '2025-01-27T18:31:01Z',
      updatedAt: '2025-01-27T18:31:01Z',
    },
    {
      id: '2',
      type: TileType.Banner,
      active: true,
      tileHeight: TileHeight.Full,
      priority: 2,
      configuration: {
        title: 'Banner Title',
        description: 'Banner Description',
      },
      createdAt: '2025-01-27T18:31:01Z',
      updatedAt: '2025-01-27T18:31:01Z',
    },
  ],
};

describe('<Grid />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Grid section={mockSection} />);
    expect(container).toMatchSnapshot();
  });

  it('renders section header and filters banner tiles', () => {
    const { getByText, queryByText } = render(<Grid section={mockSection} />);

    expect(getByText('Profile')).toBeInTheDocument();
    expect(
      getByText(
        'Welcome to WLL Explorer! Find out more about our exciting loyalty program.'
      )
    ).toBeInTheDocument();

    expect(getByText('Badge Title')).toBeInTheDocument();
    expect(queryByText('Banner Title')).toBeNull();
  });

  it('filters out banner tiles from the grid', () => {
    const { queryAllByTestId } = render(<Grid section={mockSection} />);
    const containers = queryAllByTestId('tile-container');

    // Should only have one container since we filter out the banner tiles
    expect(containers).toHaveLength(1);
  });

  it('returns null when type is not grid', () => {
    const { container } = render(
      <Grid section={{ ...mockSection, type: SectionType.Banner }} />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
