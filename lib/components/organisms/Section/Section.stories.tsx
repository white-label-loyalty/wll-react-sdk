import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { View } from 'react-native';
import { Section } from '../../../components/organisms';
import { createSectionMock } from '../../../mocks/section';
import { createTileMock } from '../../../mocks/tiles';
import { TileHeight, TileType } from '../../../types/tile';

export default {
  title: 'components/organisms/Section',
  component: Section,
  args: {
    section: {
      id: '1',
    },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
} as Meta;

const Template: StoryFn<typeof Section> = (args) => <Section {...args} />;

export const TravelRewardsSection = Template.bind({});
TravelRewardsSection.args = {
  section: createSectionMock({
    tiles: [
      createTileMock(TileType.Content, {
        tileHeight: TileHeight.Full,
        title: 'Welcome to Platinum Status',
        body: 'Enjoy premium benefits including priority check-in, lounge access, and complimentary upgrades. Your elite journey begins here.',
        artworkUrl:
          'https://ucarecdn.com/b129c5c2-08fd-4962-83b1-5c35301148c1/',
        priority: 10,
      }),
      createTileMock(TileType.Content, {
        tileHeight: TileHeight.Full,
        title: 'Double Miles Promotion',
        body: 'Earn 2X miles on all international flights this month. Plus, bonus miles on partner airlines!',
        artworkUrl:
          'https://ucarecdn.com/4dcad562-a68f-4dde-bff1-85e320df5f60/',
        ctaLink: '/promotions/double-miles',
        priority: 6,
      }),
      createTileMock(TileType.Points, {
        tileHeight: TileHeight.Half,
        points: 75420,
        title: 'Available Miles',
        artworkUrl:
          'https://ucarecdn.com/ddeedc13-e354-4f0f-9746-4e24fe7d67af/',
        pointsPrefix: '✈️',
        pointsSuffix: ' miles',
        pointsMultiplier: 1,
        priority: 4,
      }),
      createTileMock(TileType.Tier, {
        tileHeight: TileHeight.Half,
      }),
      createTileMock(TileType.Reward, {
        tileHeight: TileHeight.Full,
        name: 'Mile High Drinks',
        showPrice: true,
        showArtwork: true,
        showDetails: true,
        price: 10,
        value: 1000,
        pointsSuffix: 'pts',
        type: 'VOUCHER',
        summary: 'Limited Time Offer for all you elite members',
        artworkUrl:
          'https://images.pexels.com/photos/6858660/pexels-photo-6858660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        priority: 0,
      }),
    ],
  }),
};

export const SingleTileSection = Template.bind({});
SingleTileSection.args = {
  section: createSectionMock({
    title: 'Single Tile Layout',
    tiles: [
      createTileMock(TileType.Content, {
        tileHeight: TileHeight.Full,
        title: 'One Tile Only',
        body: 'This section contains only one tile to test single tile layout behavior.',
        artworkUrl: 'https://ucarecdn.com/b129c5c2-08fd-4962-83b1-5c35301148c1/',
        priority: 1,
      }),
    ],
  }),
};

export const TwoTileSection = Template.bind({});
TwoTileSection.args = {
  section: createSectionMock({
    title: 'Two Tile Layout',
    tiles: [
      createTileMock(TileType.Content, {
        tileHeight: TileHeight.Full,
        title: 'First Tile',
        body: 'This is the first of two tiles in this section.',
        artworkUrl: 'https://ucarecdn.com/4dcad562-a68f-4dde-bff1-85e320df5f60/',
        priority: 2,
      }),
      createTileMock(TileType.Points, {
        tileHeight: TileHeight.Full,
        points: 5000,
        title: 'Available Points',
        pointsSuffix: ' pts',
        priority: 1,
      }),
    ],
  }),
};

export const ThreeTileSection = Template.bind({});
ThreeTileSection.args = {
  section: createSectionMock({
    title: 'Three Tile Layout',
    tiles: [
      createTileMock(TileType.Content, {
        tileHeight: TileHeight.Full,
        title: 'First Tile',
        body: 'This is the first of three tiles in this section.',
        artworkUrl: 'https://ucarecdn.com/b129c5c2-08fd-4962-83b1-5c35301148c1/',
        priority: 3,
      }),
      createTileMock(TileType.Points, {
        tileHeight: TileHeight.Half,
        points: 2500,
        title: 'Half Points',
        pointsSuffix: ' pts',
        priority: 2,
      }),
      createTileMock(TileType.Tier, {
        tileHeight: TileHeight.Half,
        priority: 1,
      }),
    ],
  }),
};
