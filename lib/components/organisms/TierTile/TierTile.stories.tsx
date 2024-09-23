import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import TierTile from '.';
import { TierTileType, TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';

// Placeholder imports for images
const goldImage = '../../../assets/gold.png';
const silverImage = '../../../assets/silver.png';

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
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    active: true,
    configuration: {
      progressType: 'POINTS',
      type: TierTileType.currentTier,
      tier: {
        id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
        name: 'Gold',
        description: undefined,
        artworkUrl: goldImage,
        pointsRequirement: 10,
        earnedPoints: 100,
        attained: false,
        priority: 0,
      },
      targetTier: undefined,
      targetTierAttainingPeriod: new Date('2024-12-31'),
    },
  },
};
const CurrentTierFull = Template.bind({});
CurrentTierFull.args = {
  tile: {
    id: '1',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    active: true,
    tileHeight: TileHeight.Half,
    configuration: {
      type: TierTileType.currentTier,
      progressType: 'POINTS',
      tier: {
        id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
        name: 'Gold',
        description:
          'Enjoy 10% off, free upgrades, and exclusive member benefits...',
        artworkUrl: goldImage,
        pointsRequirement: 10,
        earnedPoints: 100,
        attained: false,
        priority: 0,
      },
      targetTier: undefined,
      targetTierAttainingPeriod: new Date('2024-12-31'),
    },
  },
};

const CurrentTargetNextTier = Template.bind({});
CurrentTargetNextTier.args = {
  tile: {
    id: '2',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    active: true,
    tileHeight: TileHeight.Full,
    configuration: {
      type: TierTileType.currentTargetNext,
      progressType: 'POINTS',
      pointsMultiplier: 1,
      pointsPrefix: '$',
      pointsSuffix: ' spent',
      tier: {
        id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
        name: 'Silver',
        artworkUrl: silverImage,
        pointsRequirement: 500,
        earnedPoints: 300,
        attained: true,
        priority: 0,
      },
      targetTier: {
        id: '93642bc2-78cb-4d7e-ade3-e0f28f09e90g',
        name: 'Gold',
        artworkUrl: goldImage,
        pointsRequirement: 1000,
        earnedPoints: 300,
        attained: false,
        priority: 1,
      },
      targetTierAttainingPeriod: new Date('2024-12-31'),
    },
  },
};

const CurrentTargetSpecificTier = Template.bind({});
CurrentTargetSpecificTier.args = {
  tile: {
    id: '3',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    active: true,
    configuration: {
      type: TierTileType.currentTargetSpecific,
      progressType: 'POINTS',
      pointsMultiplier: 1,
      pointsPrefix: '',
      pointsSuffix: ' points',
      tier: {
        id: '83642bc2-78cb-4d7e-ade3-e0f28f09e90f',
        name: 'Bronze',
        artworkUrl: goldImage,
        pointsRequirement: 100,
        earnedPoints: 50,
        attained: true,
        priority: 0,
      },
      targetTier: {
        id: '93642bc2-78cb-4d7e-ade3-e0f28f09e90g',
        name: 'Silver',
        artworkUrl: silverImage,
        pointsRequirement: 5000,
        earnedPoints: 50,
        attained: false,
        priority: 0,
      },
      targetTierAttainingPeriod: new Date('2024-12-31'),
    },
  },
};
