// @ts-nocheck
import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { createTierTileMock } from '../../../mocks/tiles/tierTile';
import { TierTileType, TileHeight } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import TierTileUpdated from './index';

export default {
  title: 'components/organisms/TierTileUpdated',
  component: TierTileUpdated,
} as Meta;

const Template: StoryFn<typeof TierTileUpdated> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <TierTileUpdated {...args} />
  </TileWrapper>
);

export const CurrentTier = Template.bind({});
CurrentTier.args = {
  tile: createTierTileMock(),
};

export const CurrentTierHalf = Template.bind({});
CurrentTierHalf.args = {
  tile: createTierTileMock({
    tileHeight: TileHeight.Half,
  }),
};

export const CurrentTierNoArtwork = Template.bind({});
CurrentTierNoArtwork.args = {
  tile: createTierTileMock({
    tier: {
      artworkUrl: null,
    },
  }),
};

export const CurrentTierNoArtworkHalf = Template.bind({});
CurrentTierNoArtworkHalf.args = {
  tile: createTierTileMock({
    tileHeight: TileHeight.Half,
    tier: {
      artworkUrl: null,
    },
  }),
};

export const CurrentNoTier = Template.bind({});
CurrentNoTier.args = {
  tile: createTierTileMock({
    title: "Oops. You're not in a tier.",
    emptyDescription: 'Earn at least 1000 points to earn bronze tier.',
    tier: {},
  }),
};

export const CurrentNoTierHalf = Template.bind({});
CurrentNoTierHalf.args = {
  tile: createTierTileMock({
    tileHeight: TileHeight.Half,
    title: "Oops. You're not in a tier.",
    emptyDescription: 'Earn at least 1000 points to earn bronze tier.',
    tier: {},
  }),
};

export const PointsToTierNotAchieved = Template.bind({});
PointsToTierNotAchieved.args = {
  tile: createTierTileMock({
    type: TierTileType.specificTier,
    title: "Oops. You're not in a tier.",
    emptyDescription: 'Earn at least 1000 points to earn bronze tier.',
    tier: {
      artworkUrl: null,
    },
  }),
};

export const PointsToTierNotAchievedHalf = Template.bind({});
PointsToTierNotAchievedHalf.args = {
  tile: createTierTileMock({
    tileHeight: TileHeight.Half,
    type: TierTileType.specificTier,
  }),
};

export const PointsToTierAchieved = Template.bind({});
PointsToTierAchieved.args = {
  tile: createTierTileMock({
    type: TierTileType.specificTier,
  }),
};

export const PointsToTierAchievedHalf = Template.bind({});
PointsToTierAchievedHalf.args = {
  tile: createTierTileMock({
    tileHeight: TileHeight.Half,
    type: TierTileType.specificTier,
  }),
};
