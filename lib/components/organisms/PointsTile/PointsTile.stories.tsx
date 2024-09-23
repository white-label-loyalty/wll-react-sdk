import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import PointsTile from './index';

const pointsImage = '../../../assets/points.png';
const pointsFull = '../../../assets/pointsFull.png';

export default {
  title: 'components/organisms/PointsTile',
  component: PointsTile,
} as Meta;

const Template: StoryFn<typeof PointsTile> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <PointsTile {...args} />
  </TileWrapper>
);

export const HalfTile = Template.bind({});
HalfTile.args = {
  tile: {
    tileHeight: TileHeight.Half,
    active: true,
    type: TileType.Points,
    tenantId: 'tenant1',
    configuration: {
      title: 'Points Balance',
      imageUrl: pointsImage,
      multiplier: undefined,
      points: 100,
      prefix: undefined,
      suffix: undefined,
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: new Date(),
    updatedAt: new Date(),
    visibilityCriteria: 'all',
  },
};
export const FullTile = Template.bind({});
FullTile.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Points,
    tenantId: 'tenant1',
    configuration: {
      title: 'Points Balance',
      imageUrl: pointsFull,
      multiplier: undefined,
      points: 100,
      prefix: undefined,
      suffix: undefined,
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: new Date(),
    updatedAt: new Date(),
    visibilityCriteria: 'all',
  },
};
