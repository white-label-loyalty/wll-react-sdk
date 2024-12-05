import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import PointsTile from './index';
// @ts-ignore
import pointsImage from '../../../assets/points.png';
// @ts-ignore
import pointsFull from '../../../assets/pointsFull.png';

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
    priority: 1,
    configuration: {
      title: 'Points Balance',
      artworkUrl: pointsImage,
      multiplier: undefined,
      points: 100,
      pointsPrefix: undefined,
      pointsSuffix: undefined,
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};

export const HalfTileWithPrefixAndSuffix = Template.bind({});
HalfTileWithPrefixAndSuffix.args = {
  tile: {
    tileHeight: TileHeight.Half,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Points Balance',
      artworkUrl: pointsImage,
      multiplier: undefined,
      points: 100,
      pointsPrefix: '$',
      pointsSuffix: 'simoleons',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};
export const FullTile = Template.bind({});
FullTile.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Points Balance',
      artworkUrl: pointsFull,
      multiplier: undefined,
      points: 100,
      pointsPrefix: undefined,
      pointsSuffix: undefined,
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};
export const FullTileWithPrefixAndSuffix = Template.bind({});
FullTileWithPrefixAndSuffix.args = {
  tile: {
    tileHeight: TileHeight.Full,
    active: true,
    type: TileType.Points,
    priority: 1,
    configuration: {
      title: 'Points Balance',
      artworkUrl: pointsFull,
      multiplier: undefined,
      points: 100,
      pointsPrefix: '$',
      pointsSuffix: 'simoleons',
    },
    id: '405a6844-f472-4d9e-84b9-20fb55dbd399',
    createdAt: '',
    updatedAt: '',
  },
};
