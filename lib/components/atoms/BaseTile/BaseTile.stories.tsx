import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { TileHeight } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import BaseTile from './index';

export default {
  title: 'components/atoms/BaseTile',
  component: BaseTile,
} as Meta;

const Template: StoryFn<typeof BaseTile> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <BaseTile {...args} />
  </TileWrapper>
);

export const FullHeight = Template.bind({});
FullHeight.args = {
  tile: {
    id: '1',
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      artworkUrl: 'https://picsum.photos/200/300',
    },
  },
};
export const HalfHeight = Template.bind({});
HalfHeight.args = {
  tile: {
    id: '2',
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    priority: 2,
    configuration: {
      artworkUrl: 'https://picsum.photos/200/300',
    },
  },
};
