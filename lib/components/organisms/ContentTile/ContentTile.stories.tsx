import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ContentTile from '.';
import { CTALinkTarget, TileHeight, TileType } from '../../../types/tile';
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
    priority: 1,
    configuration: {
      title: 'Welcome Nick!',
      body: 'Lorem ipsum dolor sit amet',
      artworkUrl:
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
    priority: 1,
    configuration: {
      artworkUrl:
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
    priority: 1,
    configuration: {
      title: 'Welcome Nick!',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    priority: 1,
    configuration: {
      title: 'Welcome Nick!',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sequi non accusamus veniam iste? Aut assumenda explicabo, beatae, vero illum, saepe perspiciatis soluta tempora consequuntur ipsa voluptates. Placeat, libero! Omnis!',
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
    priority: 1,
    configuration: {
      artworkUrl:
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
    priority: 1,
    configuration: {
      title: 'Welcome Nick!',
      body: 'Lorem ipsum dolor sit amet',
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
    priority: 1,
    configuration: {
      title: 'Welcome Nick!',
      body: 'Lorem ipsum dolor sit amet',
      ctaLink: 'https://www.google.com',
      ctaLinkTarget: CTALinkTarget.sameWindow,
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
    priority: 1,
    configuration: {
      title: 'Welcome Nick!',
      body: 'Click here to learn more',
      artworkUrl:
        'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg',
      ctaLink: 'https://www.google.com',
      ctaLinkTarget: CTALinkTarget.newWindow,
    },
  },
};
