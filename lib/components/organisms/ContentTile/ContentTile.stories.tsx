import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ContentTile from '.';
import { TileHeight, TileType } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';

export default {
  title: 'components/organisms/ContentTile',
  component: ContentTile,
} as Meta<typeof ContentTile>;

const Template: StoryFn<typeof ContentTile> = (args) => (
  <TileWrapper isHalfTile={args.tile.tileHeight === TileHeight.Half}>
    <ContentTile {...args} />
  </TileWrapper>
);

export const FullSizeImageAndText = Template.bind({});
FullSizeImageAndText.args = {
  tile: {
    id: '1',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      title: 'Welcome Nick!',
      subtitle: 'Lorem ipsum dolor sit amet',
      imageUrl:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
    },
  },
};

export const FullSizeImageOnly = Template.bind({});
FullSizeImageOnly.args = {
  tile: {
    id: '2',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      imageUrl:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
    },
  },
};

export const FullSizeTextOnly = Template.bind({});
FullSizeTextOnly.args = {
  tile: {
    id: '3',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      title: 'Welcome Nick!',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
};
export const FullSizeTextOnlyLongBody = Template.bind({});
FullSizeTextOnlyLongBody.args = {
  tile: {
    id: '3',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      title: 'Welcome Nick!',
      subtitle:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sequi non accusamus veniam iste? Aut assumenda explicabo, beatae, vero illum, saepe perspiciatis soluta tempora consequuntur ipsa voluptates. Placeat, libero! Omnis!',
    },
  },
};

export const HalfSizeImageOnly = Template.bind({});
HalfSizeImageOnly.args = {
  tile: {
    id: '4',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    configuration: {
      imageUrl:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
    },
  },
};

export const HalfSizeTextOnly = Template.bind({});
HalfSizeTextOnly.args = {
  tile: {
    id: '5',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    configuration: {
      title: 'Welcome Nick!',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
  },
};

export const HalfSizeTextOnlyWithLink = Template.bind({});
HalfSizeTextOnlyWithLink.args = {
  tile: {
    id: '5',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    configuration: {
      title: 'Welcome Nick!',
      subtitle: 'Lorem ipsum dolor sit amet',
      linkURL: 'https://www.example.com',
    },
  },
};

export const FullSizeWithLink = Template.bind({});
FullSizeWithLink.args = {
  tile: {
    id: '6',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      title: 'Welcome Nick!',
      subtitle: 'Click here to learn more',
      imageUrl:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
      linkURL: 'https://www.example.com',
    },
  },
};
