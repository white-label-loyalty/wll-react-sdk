import '@testing-library/jest-dom';
import React from 'react';
import { SectionType } from '../../../types/section';
import { TileHeight, TileType } from '../../../types/tile';
import { render, within } from '../../__test__/test-utils';
import Carousel from './index';

const mockSection = {
  id: 'test-section',
  name: 'Banner Section',
  type: SectionType.Banner,
  active: true,
  createdAt: '2025-01-27T18:31:01Z',
  updatedAt: '2025-01-27T18:31:01Z',
  visibilityCriteria: null,
  priority: 5,
  title: 'Featured Banners',
  description: 'Check out our latest promotions and updates!',
  defaultLocale: 'en',
  locale: 'en',
  tiles: [
    {
      id: '1',
      type: TileType.Banner,
      active: true,
      tileHeight: TileHeight.Full,
      priority: 2,
      configuration: {
        title: 'First Banner',
        description: 'First Banner Description',
      },
      createdAt: '2025-01-27T18:31:01Z',
      updatedAt: '2025-01-27T18:31:01Z',
    },
    {
      id: '2',
      type: TileType.Badge,
      active: true,
      tileHeight: TileHeight.Full,
      priority: 1,
      configuration: {
        name: 'Badge Title',
        description: 'Badge Description',
      },
      createdAt: '2025-01-27T18:31:01Z',
      updatedAt: '2025-01-27T18:31:01Z',
    },
    {
      id: '3',
      type: TileType.Banner,
      active: true,
      tileHeight: TileHeight.Full,
      priority: 3,
      configuration: {
        title: 'Second Banner',
        description: 'Second Banner Description',
      },
      createdAt: '2025-01-27T18:31:01Z',
      updatedAt: '2025-01-27T18:31:01Z',
    },
  ],
};

describe('<Carousel />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Carousel section={mockSection} />);
    expect(container).toMatchSnapshot();
  });

  it('renders section header', () => {
    const { getByText } = render(<Carousel section={mockSection} />);

    expect(getByText('Featured Banners')).toBeInTheDocument();
    expect(
      getByText('Check out our latest promotions and updates!')
    ).toBeInTheDocument();
  });

  it('filters out non-banner tiles', () => {
    const { queryByText } = render(<Carousel section={mockSection} />);

    expect(queryByText('First Banner')).toBeInTheDocument();
    expect(queryByText('Second Banner')).toBeInTheDocument();
    expect(queryByText('Badge Title')).not.toBeInTheDocument();
  });

  it('sorts banner tiles by priority', () => {
    const { getAllByTestId } = render(<Carousel section={mockSection} />);
    const bannerTiles = getAllByTestId('banner-tile');

    expect(bannerTiles).toHaveLength(2);
    expect(
      within(bannerTiles[0]).getByText('Second Banner')
    ).toBeInTheDocument();
    expect(
      within(bannerTiles[1]).getByText('First Banner')
    ).toBeInTheDocument();
  });

  it('shows next button when multiple banner tiles exist and carousel is at first slide', () => {
    const { getByRole } = render(<Carousel section={mockSection} />);

    expect(getByRole('button', { name: /next slide/i })).toBeInTheDocument();
  });

  it('hides navigation controls when only one banner tile exists', () => {
    const singleBannerSection = {
      ...mockSection,
      tiles: [mockSection.tiles[0]],
    };
    const { queryByRole } = render(<Carousel section={singleBannerSection} />);

    expect(
      queryByRole('button', { name: /previous slide/i })
    ).not.toBeInTheDocument();
    expect(
      queryByRole('button', { name: /next slide/i })
    ).not.toBeInTheDocument();
  });
});
