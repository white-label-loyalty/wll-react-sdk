import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import pointsImage from '../../../assets/points.png';
import pointsFull from '../../../assets/pointsFull.png';
import { TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import PointsTile from './index';

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
      title: 'Points',
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
      title: 'Points',
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
