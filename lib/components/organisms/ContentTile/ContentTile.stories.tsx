import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ContentTile from '.';
import { TileHeight, TileType } from '../../../types/tile';

export default {
  title: 'components/organisms/ContentTile',
  component: ContentTile,
} as Meta<typeof ContentTile>;

const Template: StoryFn<typeof ContentTile> = (args) => (
  <ContentTile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tile: {
    id: '1',
    type: TileType.Content,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tileHeight: TileHeight.Half,
    configuration: {
      title: 'Welcome Nick! ',
      imageUrl:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
};

export const FullSizeImageAndText = Template.bind({});
FullSizeImageAndText.args = {
  tile: {
    id: '1',
    type: TileType.Content,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tileHeight: TileHeight.Full,
    configuration: {
      title: 'Welcome Nick!',
      subtitle: 'Lorem ipsum dolor sit amet',
      imageUrl:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
    },
  },
};

export const HalfSizeTextOnly = Template.bind({});
HalfSizeTextOnly.args = {
  tile: {
    id: '1',
    type: TileType.Content,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tileHeight: TileHeight.Half,
    configuration: {
      title: 'Welcome Nick!',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
  },
};
export const FullSizeImageOnly = Template.bind({});
FullSizeImageOnly.args = {
  tile: {
    id: '1',
    type: TileType.Content,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tileHeight: TileHeight.Half,
    configuration: {
      imageUrl:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
      title: undefined,
      subtitle: undefined,
    },
  },
};
