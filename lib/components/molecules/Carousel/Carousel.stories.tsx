import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { SLIDE_WIDTH } from '../../../constants';
import { SectionType } from '../../../types/section';
import { CTALinkTarget, TileHeight, TileType } from '../../../types/tile';
import Carousel from './index';

export default {
  title: 'components/molecules/Carousel',
  component: Carousel,
  argTypes: {
    section: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<typeof Carousel> = (args) => (
  <View style={{ width: '100%', height: '100%', maxWidth: SLIDE_WIDTH }}>
    <Carousel {...args} />
  </View>
);

export const Default = Template.bind({});
Default.args = {
  section: {
    details: [],
    defaultLocale: 'en',
    name: 'Banner Tiles',
    type: SectionType.Banner,
    active: true,
    id: 'dcf1544e-6e1a-4126-b324-cf91e267c3a4',
    createdAt: '2024-11-08T15:06:37.711Z',
    updatedAt: '2024-11-08T15:06:37.711Z',
    priority: 1,
    tiles: [
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Banner,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.sameWindow,
          locale: 'en',
          title: 'New iPhone 15 Pro',
          ctaLink: '/products/iphone15pro',
          ctaText: 'Shop Now',
          artworkUrl:
            'https://www.istore.co.uk/wp-content/uploads/2023/09/iPhone_15_Pro_Blue_Titanium_PDP_Image_Position-5__GBEN-1.jpg',
          description:
            'Experience the power of our most advanced iPhone yet. Available now with exclusive launch offers.',
        },
        id: '8f28093b-6251-4ea9-a43b-1c9a9fe1e181',
        createdAt: '2024-11-08T15:02:53.149Z',
        updatedAt: '2024-11-08T15:02:53.149Z',
        priority: 3,
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Banner,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.sameWindow,
          locale: 'en',
          title: 'Unlock Your Rewards',
          ctaLink: '#member-card',
          ctaText: 'View Rewards',
          artworkUrl:
            'https://images.pexels.com/photos/39389/keyboard-key-success-online-39389.jpeg',
          description:
            'You have 5000 points waiting! Redeem now for exclusive discounts and perks.',
        },
        id: 'ec7d5b2d-1dff-4491-a936-4f5acc1c5a44',
        createdAt: '2024-11-08T15:03:03.906Z',
        updatedAt: '2024-11-08T15:03:03.906Z',
        priority: 2,
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Banner,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.sameWindow,
          locale: 'en',
          title: 'TechCon 2024',
          ctaLink: 'https://techcon2024.com/register',
          ctaText: 'Register Now',
          artworkUrl:
            'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg',
          description:
            'Join the biggest tech conference of the year. Keynotes, workshops, and networking opportunities await!',
        },
        id: 'a1e7f8e8-f4d0-4c5b-a018-cca673fadc2c',
        createdAt: '2024-11-08T15:03:22.485Z',
        updatedAt: '2024-11-08T15:03:22.485Z',
        priority: 1,
      },
    ],
    title: 'Banner Tiles',
    locale: 'en',
    description:
      "Where pixels meet perks! Discover a world of rewards that'll make your digital heart skip a byte. ✨",
  },
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  section: {
    details: [],
    defaultLocale: 'en',
    name: 'Banner Tiles',
    type: SectionType.Banner,
    active: true,
    id: 'dcf1544e-6e1a-4126-b324-cf91e267c3a4',
    createdAt: '2024-11-08T15:06:37.711Z',
    updatedAt: '2024-11-08T15:06:37.711Z',
    priority: 1,
    tiles: [
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Banner,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.sameWindow,
          locale: 'en',
          title: 'TechCon 2024',
          ctaLink: 'https://techcon2024.com/register',
          ctaText: 'Register Now',
          artworkUrl:
            'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg',
          description:
            'Join the biggest tech conference of the year. Keynotes, workshops, and networking opportunities await!',
        },
        id: 'a1e7f8e8-f4d0-4c5b-a018-cca673fadc2c',
        createdAt: '2024-11-08T15:03:22.485Z',
        updatedAt: '2024-11-08T15:03:22.485Z',
        priority: 1,
      },
    ],
    title: 'Banner Tiles',
    locale: 'en',
    description:
      "Where pixels meet perks! Discover a world of rewards that'll make your digital heart skip a byte. ✨",
  },
};

export const ManyItems = Template.bind({});
ManyItems.args = {
  section: {
    details: [],
    defaultLocale: 'en',
    name: 'Banner Tiles',
    type: SectionType.Banner,
    active: true,
    id: 'dcf1544e-6e1a-4126-b324-cf91e267c3a4',
    createdAt: '2024-11-08T15:06:37.711Z',
    updatedAt: '2024-11-08T15:06:37.711Z',
    priority: 1,
    tiles: [
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Banner,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.sameWindow,
          locale: 'en',
          title: 'New iPhone 15 Pro',
          ctaLink: '/products/iphone15pro',
          ctaText: 'Shop Now',
          artworkUrl:
            'https://www.istore.co.uk/wp-content/uploads/2023/09/iPhone_15_Pro_Blue_Titanium_PDP_Image_Position-5__GBEN-1.jpg',
          description:
            'Experience the power of our most advanced iPhone yet. Available now with exclusive launch offers.',
        },
        id: '8f28093b-6251-4ea9-a43b-1c9a9fe1e181',
        createdAt: '2024-11-08T15:02:53.149Z',
        updatedAt: '2024-11-08T15:02:53.149Z',
        priority: 3,
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Banner,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.sameWindow,
          locale: 'en',
          title: 'Unlock Your Rewards',
          ctaLink: '#member-card',
          ctaText: 'View Rewards',
          artworkUrl:
            'https://images.pexels.com/photos/39389/keyboard-key-success-online-39389.jpeg',
          description:
            'You have 5000 points waiting! Redeem now for exclusive discounts and perks.',
        },
        id: 'ec7d5b2d-1dff-4491-a936-4f5acc1c5a44',
        createdAt: '2024-11-08T15:03:03.906Z',
        updatedAt: '2024-11-08T15:03:03.906Z',
        priority: 2,
      },
      {
        tileHeight: TileHeight.Full,
        active: true,
        type: TileType.Banner,
        configuration: {
          defaultLocale: 'en',
          details: [],
          ctaLinkTarget: CTALinkTarget.sameWindow,
          locale: 'en',
          title: 'TechCon 2024',
          ctaLink: 'https://techcon2024.com/register',
          ctaText: 'Register Now',
          artworkUrl:
            'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg',
          description:
            'Join the biggest tech conference of the year. Keynotes, workshops, and networking opportunities await!',
        },
        id: 'a1e7f8e8-f4d0-4c5b-a018-cca673fadc2c',
        createdAt: '2024-11-08T15:03:22.485Z',
        updatedAt: '2024-11-08T15:03:22.485Z',
        priority: 1,
      },
    ],
    title: 'Banner Tiles',
    locale: 'en',
    description:
      "Where pixels meet perks! Discover a world of rewards that'll make your digital heart skip a byte. ✨",
  },
};
