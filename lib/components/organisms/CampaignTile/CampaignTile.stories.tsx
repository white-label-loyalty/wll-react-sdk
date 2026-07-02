import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import CampaignTile from './index';
import { createCampaignTileMock } from '../../../mocks/tiles/campaignTile';
import { TileWrapper } from '../../../utils/storybookHelpers';

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

export const Default = Template.bind({});
Default.args = {
  tile: createCampaignTileMock(),
};

export const WithProgress = Template.bind({});
WithProgress.args = {
  tile: createCampaignTileMock({
    name: 'Summer Coffee Challenge',
    description: 'Complete every step to earn the reward.',
    progress: {
      currentValue: 2,
      targetValue: 3,
      windowStart: new Date('2026-06-20T09:00:00.000Z'),
      windowEnd: new Date('2026-06-27T09:00:00.000Z'),
      optedInAt: new Date('2026-06-20T09:00:00.000Z'),
      completedAt: null,
      availableAgainAt: null,
      cooldownCycle: null,
    },
  }),
};

export const WithoutProgress = Template.bind({});
WithoutProgress.args = {
  tile: createCampaignTileMock({
    name: 'Winter Loyalty',
    description: 'Earn rewards throughout winter',
    progress: null as any,
  }),
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  tile: createCampaignTileMock({
    name: 'No Image Campaign',
    description: 'Campaign without artwork',
    artworkUrl: '',
  }),
};

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  tile: createCampaignTileMock({
    name: 'Summer Loyalty',
    description: '',
  }),
};

export const Completed = Template.bind({});
Completed.args = {
  tile: createCampaignTileMock({
    name: 'Completed Challenge',
    description: 'You did it!',
    status: 'COMPLETED',
    progress: {
      currentValue: 3,
      targetValue: 3,
      windowStart: new Date('2026-06-20T09:00:00.000Z'),
      windowEnd: new Date('2026-06-27T09:00:00.000Z'),
      optedInAt: new Date('2026-06-20T09:00:00.000Z'),
      completedAt: new Date('2026-06-25T14:05:00.000Z'),
      availableAgainAt: null,
      cooldownCycle: null,
    },
  }),
};
