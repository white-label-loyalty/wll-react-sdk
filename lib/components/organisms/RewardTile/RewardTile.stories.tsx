import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import RewardTile from './index';
import { View } from 'react-native';
// @ts-ignore
import rewardImage from '../../../assets/reward.png';
import { createRewardTileMock } from '../../../mocks/tiles/rewardTile';
import { TileWrapper } from '../../../utils/storybookHelpers';

export default {
  title: 'components/organisms/RewardTile',
  component: RewardTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof RewardTile> = (args) => (
  <TileWrapper>
    <RewardTile {...args} />
  </TileWrapper>
);

export const Default = Template.bind({});
Default.args = {
  tile: createRewardTileMock(),
};

export const DefaultWithPoints = Template.bind({});
DefaultWithPoints.args = {
  tile: createRewardTileMock({
    name: 'Pizza',
    summary: 'Delicious pizza Delicious pizza Delicious pizza Delicious pizza Delicious pizza Delicious pizza ',
    price: 10,
    pointsSuffix: 'pts',
    artworkUrl: 'https://ucarecdn.com/cbc5895e-a193-4a94-bb0f-d514719e36a6/',
  }),
};

export const ArtworkOnly = Template.bind({});
ArtworkOnly.args = {
  tile: createRewardTileMock({
    showDetails: false,
    artworkUrl: rewardImage,
    name: 'Spotify Premium',
    summary: 'Get 1 year subscription',
    price: 61,
  }),
};

export const Locked = Template.bind({});
Locked.args = {
  tile: createRewardTileMock({
    isLocked: true,
  }),
};

export const ArtworkOnlyLocked = Template.bind({});
ArtworkOnlyLocked.args = {
  tile: createRewardTileMock({
    showDetails: false,
    artworkUrl: rewardImage,
    name: 'Spotify Premium',
    summary: 'Get 1 year subscription',
    price: 61,
    isLocked: true,
  }),
};

const MobileAppTemplate: StoryFn<typeof RewardTile> = (args) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    <TileWrapper containerStyle={{ width: '50%' }}>
      <RewardTile {...args} />
    </TileWrapper>
    <TileWrapper containerStyle={{ width: '50%' }}>
      <RewardTile {...args}/>

    </TileWrapper>
  </View>
);

export const MobileTwoPerRow = MobileAppTemplate.bind({});
MobileTwoPerRow.args = DefaultWithPoints.args;
