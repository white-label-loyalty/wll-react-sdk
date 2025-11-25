import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import VenueTile from './index';
// @ts-ignore
import { TileWrapper } from '../../../utils/storybookHelpers';
import { createVenueTileMock } from '../../../mocks/tiles/venueTile';

export default {
  title: 'components/organisms/VenueTile',
  component: VenueTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof VenueTile> = (args) => (
  <TileWrapper>
    <VenueTile {...args} />
  </TileWrapper>
);

export const Default = Template.bind({});
Default.args = {
  tile: createVenueTileMock(),
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  tile: createVenueTileMock({
    name: 'Sweet Chilli Lobster Noodles',
    description: 'Fresh Lobster Noodles with a spicy chilli sauce',
    artworkUrl: 'https://ucarecdn.com/cbc5895e-a193-4a94-bb0f-d514719e36a6/',
  }),
};

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  tile: createVenueTileMock({
    artworkUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
    description: undefined,
  }),
};

export const Locked = Template.bind({});
Locked.args = {
  tile: createVenueTileMock({
    artworkUrl: 'https://ucarecdn.com/a486d015-b4ab-4831-bfa5-68f5bbbf63b1/',
    isLocked: true,
  }),
};
