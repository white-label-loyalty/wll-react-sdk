import { Meta, StoryFn } from '@storybook/react';
import { TileHeight } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';

import * as React from 'react';
import LoadingIndicator from './index';

export default {
  title: 'components/atoms/LoadingIndicator',
  component: LoadingIndicator,
} as Meta;

const Template: StoryFn<typeof LoadingIndicator> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <LoadingIndicator {...args} />
  </TileWrapper>
);

export const FullHeight = Template.bind({});
FullHeight.args = {
  tile: {
    tileHeight: TileHeight.Full,
  },
};
export const HalfHeight = Template.bind({});
HalfHeight.args = {
  tile: {
    tileHeight: TileHeight.Full,
  },
};
