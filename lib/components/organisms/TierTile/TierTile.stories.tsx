import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import TierTile from '.';
import {
  ProgressType,
  TierTileType,
  TileHeight,
  TileType,
} from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
// @ts-ignore
import goldImage from '../../../assets/gold.png';
// @ts-ignore
import silverImage from '../../../assets/silver.png';

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

export const CurrentTierHalf = Template.bind({});
CurrentTierHalf.args = {
  tile: {
    id: '1',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    active: true,
    configuration: {
      progressType: ProgressType.Points,
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

export const CurrentTierFull = Template.bind({});
CurrentTierFull.args = {
  tile: {
    id: '1',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    active: true,
    tileHeight: TileHeight.Full,
    configuration: {
      type: TierTileType.currentTier,
      progressType: ProgressType.Points,
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

export const CurrentTargetNextTierHalf = Template.bind({});
CurrentTargetNextTierHalf.args = {
  tile: {
    id: '2',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    active: true,
    tileHeight: TileHeight.Half,
    configuration: {
      type: TierTileType.currentTargetNext,
      progressType: ProgressType.Points,
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

export const CurrentTargetNextTierFull = Template.bind({});
CurrentTargetNextTierFull.args = {
  tile: {
    id: '2',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    active: true,
    tileHeight: TileHeight.Full,
    configuration: {
      type: TierTileType.currentTargetNext,
      progressType: ProgressType.Points,
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

export const CurrentTargetSpecificTierHalf = Template.bind({});
CurrentTargetSpecificTierHalf.args = {
  tile: {
    id: '3',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    active: true,
    configuration: {
      type: TierTileType.currentTargetSpecific,
      progressType: ProgressType.Points,
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
        name: 'Platinum',
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
export const CurrentTargetSpecificTierFull = Template.bind({});
CurrentTargetSpecificTierFull.args = {
  tile: {
    id: '3',
    type: TileType.Tier,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    active: true,
    configuration: {
      type: TierTileType.currentTargetSpecific,
      progressType: ProgressType.Points,
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
        name: 'Platinum',
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
