import React from 'react';
import { createCampaignTileMock } from '../../../mocks/tiles/campaignTile';
import { render } from '../../__test__/test-utils';
import { CampaignTile } from './index';

const CampaignTileMock = createCampaignTileMock();

describe('<CampaignTile />', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(<CampaignTile tile={CampaignTileMock} />);
    expect(container).toMatchSnapshot();
  });
});

describe('<CampaignTile /> Rendering States', () => {
  it('renders correctly with all fields', () => {
    const { getByTestId } = render(<CampaignTile tile={CampaignTileMock} />);

    expect(getByTestId('campaign-tile-media')).toBeInTheDocument();
    expect(getByTestId('campaign-tile-title')).toBeInTheDocument();
    expect(getByTestId('campaign-tile-description')).toBeInTheDocument();
    expect(getByTestId('campaign-tile-progress')).toBeInTheDocument();
  });

  it('handles inactive tile gracefully', () => {
    const inactiveTile = createCampaignTileMock({ active: false });
    const { container } = render(<CampaignTile tile={inactiveTile} />);
    expect(container.firstChild).toBeNull();
  });
});

describe('<CampaignTile /> Media', () => {
  it('renders media when pictureUrl is provided', () => {
    const { getByTestId } = render(<CampaignTile tile={CampaignTileMock} />);
    expect(getByTestId('campaign-tile-media')).toBeInTheDocument();
  });

  it('does not render media when artworkUrl is empty', () => {
    const tileWithoutImage = createCampaignTileMock({ artworkUrl: '' });
    const { queryByTestId } = render(
      <CampaignTile tile={tileWithoutImage} />
    );
    expect(queryByTestId('campaign-tile-media')).not.toBeInTheDocument();
  });
});

describe('<CampaignTile /> Description', () => {
  it('renders description when provided', () => {
    const { getByTestId } = render(<CampaignTile tile={CampaignTileMock} />);
    expect(getByTestId('campaign-tile-description')).toBeInTheDocument();
  });

  it('does not render description when empty', () => {
    const tileWithoutDescription = createCampaignTileMock({
      description: '',
    });
    const { queryByTestId } = render(
      <CampaignTile tile={tileWithoutDescription} />
    );
    expect(
      queryByTestId('campaign-tile-description')
    ).not.toBeInTheDocument();
  });
});

describe('<CampaignTile /> Progress', () => {
  it('renders progress bar when progress data is available', () => {
    const { getByTestId } = render(<CampaignTile tile={CampaignTileMock} />);
    expect(getByTestId('campaign-tile-progress')).toBeInTheDocument();
  });

  it('does not render progress bar when progress is null', () => {
    const tileWithoutProgress = createCampaignTileMock({
      progress: null as any,
    });
    const { queryByTestId } = render(
      <CampaignTile tile={tileWithoutProgress} />
    );
    expect(queryByTestId('campaign-tile-progress')).not.toBeInTheDocument();
  });
});
