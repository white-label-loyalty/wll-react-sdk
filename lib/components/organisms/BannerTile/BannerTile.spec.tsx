import '@testing-library/jest-dom';
import React from 'react';
import { createBannerTileMock } from '../../../mocks/tiles/bannerTile';
import { render } from '../../__test__/test-utils';
import { BannerTile } from './index';

const BannerImageOnlyMock = createBannerTileMock();

const BannerTileMock = createBannerTileMock({
  title: 'Summer Points Splash',
  ctaLink: '/summer-rewards',
  ctaText: 'Start Earning',
  artworkUrl:
    'https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  description:
    'Double points on all summer essentials! Plus, unlock exclusive seasonal rewards when you spend $100 or more.',
});

describe('<BannerTile  />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<BannerTile tile={BannerTileMock} />);
    expect(container).toMatchSnapshot();
  });
});

describe('<BannerTile /> Rendering States', () => {
  it('returns null when tile is not active', () => {
    const inactiveTile = createBannerTileMock({ active: false });
    const { container } = render(<BannerTile tile={inactiveTile} />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe('<BannerTile /> Media', () => {
  it('renders artwork only when only artworkUrl is provided', () => {
    const { getByTestId, queryByTestId } = render(
      <BannerTile tile={BannerImageOnlyMock} />
    );
    expect(getByTestId('banner-tile-media')).toBeInTheDocument();
    expect(queryByTestId('banner-tile-title')).not.toBeInTheDocument();
    expect(queryByTestId('banner-tile-description')).not.toBeInTheDocument();
    expect(queryByTestId('banner-tile-cta')).not.toBeInTheDocument();
  });
});

describe('<BannerTile /> Other Components', () => {
  it('renders cta when ctaText and ctaLink are provided', () => {
    const { getByTestId } = render(<BannerTile tile={BannerTileMock} />);
    expect(getByTestId('banner-tile-cta')).toBeInTheDocument();
  });

  it('renders title and description when title and description are provided', () => {
    const { getByTestId } = render(<BannerTile tile={BannerTileMock} />);
    expect(getByTestId('banner-tile-title')).toBeInTheDocument();
    expect(getByTestId('banner-tile-description')).toBeInTheDocument();
  });
});

describe('<BannerTile /> Content', () => {
  it('renders correct content in title and description', () => {
    const { getByText } = render(<BannerTile tile={BannerTileMock} />);
    expect(getByText('Summer Points Splash')).toBeInTheDocument();
    expect(
      getByText(
        'Double points on all summer essentials! Plus, unlock exclusive seasonal rewards when you spend $100 or more.'
      )
    ).toBeInTheDocument();
  });

  it('renders CTA with correct text', () => {
    const { getByRole } = render(<BannerTile tile={BannerTileMock} />);
    const button = getByRole('button', { name: 'Start Earning' });
    expect(button).toBeInTheDocument();
  });
});

describe('<BannerTile /> Edge Cases', () => {
  const emptyBannerMock = createBannerTileMock({
    artworkUrl: '',
  });

  it('handles missing artworkUrl gracefully', () => {
    const { queryByTestId } = render(<BannerTile tile={emptyBannerMock} />);
    expect(queryByTestId('banner-tile-media')).not.toBeInTheDocument();
  });

  it('handles missing optional props gracefully', () => {
    const partialBannerMock = createBannerTileMock({
      description: undefined,
      ctaText: undefined,
      ctaLink: undefined,
    });
    const { queryByTestId } = render(<BannerTile tile={partialBannerMock} />);
    expect(queryByTestId('banner-tile-description')).not.toBeInTheDocument();
    expect(queryByTestId('banner-tile-cta')).not.toBeInTheDocument();
  });
});
