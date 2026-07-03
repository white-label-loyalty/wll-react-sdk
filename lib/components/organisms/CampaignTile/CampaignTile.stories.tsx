import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import CampaignTile from './index';
import { createCampaignTileMock } from '../../../mocks/tiles/campaignTile';
import { TileHeight } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
// @ts-ignore
import rewardImage from '../../../assets/reward.png';

export default {
  title: 'components/organisms/CampaignTile',
  component: CampaignTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof CampaignTile> = (args) => (
  <TileWrapper>
    <CampaignTile {...args} />
  </TileWrapper>
);

// --- Full Tile Variants ---

export const FullWithProgress = Template.bind({});
FullWithProgress.args = {
  tile: createCampaignTileMock({
    name: 'Summer Coffee Challenge',
    description: 'Complete every step to earn the reward.',
    artworkUrl: rewardImage,
    showDetails: true,
    progress: {
      currentValue: 2,
      targetValue: 3,
      windowStart: '2026-06-20T09:00:00.000Z',
      windowEnd: '2026-06-27T09:00:00.000Z',
      optedInAt: '2026-06-20T09:00:00.000Z',
      completedAt: null,
      availableAgainAt: null,
      cooldownCycle: null,
    },
  }),
};

export const FullWithoutProgress = Template.bind({});
FullWithoutProgress.args = {
  tile: createCampaignTileMock({
    name: 'Winter Loyalty',
    description: 'Earn rewards throughout winter.',
    artworkUrl: rewardImage,
    showDetails: true,
    progress: null as any,
  }),
};

export const FullCompleted = Template.bind({});
FullCompleted.args = {
  tile: createCampaignTileMock({
    name: 'Completed Challenge',
    description: 'You did it!',
    status: 'COMPLETED',
    artworkUrl: rewardImage,
    showDetails: true,
    progress: {
      currentValue: 3,
      targetValue: 3,
      windowStart: '2026-06-20T09:00:00.000Z',
      windowEnd: '2026-06-27T09:00:00.000Z',
      optedInAt: '2026-06-20T09:00:00.000Z',
      completedAt: '2026-06-25T14:05:00.000Z',
      availableAgainAt: null,
      cooldownCycle: null,
    },
  }),
};

export const FullArtworkOnly = Template.bind({});
FullArtworkOnly.args = {
  tile: createCampaignTileMock({
    name: 'Artwork Only Campaign',
    artworkUrl: rewardImage,
    showDetails: false,
  }),
};

export const FullWithoutImage = Template.bind({});
FullWithoutImage.args = {
  tile: createCampaignTileMock({
    name: 'No Image Campaign',
    description: 'Campaign without artwork.',
    artworkUrl: '',
    showDetails: true,
  }),
};

// --- Half Tile Variants ---

export const HalfWithProgress = Template.bind({});
HalfWithProgress.args = {
  tile: createCampaignTileMock({
    name: 'Half Tile Challenge',
    description: 'A half-height campaign tile.',
    artworkUrl: rewardImage,
    showDetails: true,
    tileHeight: TileHeight.Half,
    progress: {
      currentValue: 1,
      targetValue: 4,
      windowStart: '2026-06-20T09:00:00.000Z',
      windowEnd: '2026-06-27T09:00:00.000Z',
      optedInAt: '2026-06-20T09:00:00.000Z',
      completedAt: null,
      availableAgainAt: null,
      cooldownCycle: null,
    },
  }),
};

export const HalfWithoutProgress = Template.bind({});
HalfWithoutProgress.args = {
  tile: createCampaignTileMock({
    name: 'Half No Progress',
    description: 'Half-height with no progress.',
    artworkUrl: rewardImage,
    showDetails: true,
    tileHeight: TileHeight.Half,
    progress: null as any,
  }),
};

export const HalfArtworkOnly = Template.bind({});
HalfArtworkOnly.args = {
  tile: createCampaignTileMock({
    name: 'Half Artwork Only',
    artworkUrl: rewardImage,
    showDetails: false,
    tileHeight: TileHeight.Half,
  }),
};
