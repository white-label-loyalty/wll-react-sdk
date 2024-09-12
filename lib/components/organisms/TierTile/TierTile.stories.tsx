import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import TierTile from '.';
import goldImage from '../../../assets/gold.png';
import { TierTileType, TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';

export default {
  title: 'components/organisms/TierTile',
  component: TierTile,
  argTypes: {
    tile: { control: 'object' },
  },
} as Meta<typeof TierTile>;

const Template: StoryFn<typeof TierTile> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <TierTile {...args} />
  </TileWrapper>
);

const CurrentTierHalf = Template.bind({});
CurrentTierHalf.args = {
  tile: {
    id: '1',
    type: TileType.Tier,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'XXXXXXX',
    visibilityCriteria: 'all',
    tileHeight: TileHeight.Half,
    configuration: {
      type: TierTileType.currentTier,
      tierId: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
      tier: {
        id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
        name: 'Gold',
        description: null,
        artworkUrl: goldImage,
        pointsRequirement: 10,
        earnedPoints: 100,
        attained: false,
      },
    },
  },
};
const CurrentTierFull = Template.bind({});
CurrentTierFull.args = {
  tile: {
    id: '1',
    type: TileType.Tier,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'XXXXXXX',
    visibilityCriteria: 'all',
    tileHeight: TileHeight.Half,
    configuration: {
      type: TierTileType.currentTier,
      tierId: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
      tier: {
        id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
        name: 'Gold',
        description:
          'Enjoy 10% off, free upgrades, and exclusive member benefits...',
        artworkUrl: goldImage,
        pointsRequirement: 10,
        earnedPoints: 100,
        attained: false,
      },
    },
  },
};
