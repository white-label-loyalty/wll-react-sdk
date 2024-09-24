import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { CtaAction, TileHeight, TileType } from '../../../types/tile';
import BaseBanner from './index';

export default {
  title: 'components/atoms/BaseBanner',
  component: BaseBanner,
} as Meta;

const Template: StoryFn<typeof BaseBanner> = (args) => <BaseBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  tile: {
    id: 'banner-1',
    type: TileType.Banner,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    configuration: {
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg',
      title: 'Summer Sale',
      description: 'Get up to 50% off on selected items!',
      ctaText: 'SHOP NOW',
      ctaLink: 'https://www.example.com',
      ctaAction: CtaAction.sameWindow,
    },
  },
};
