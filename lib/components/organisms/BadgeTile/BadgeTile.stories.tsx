import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { createBadgeTileMock } from '../../../mocks/badgeTile';
import { BadgeTileType, TileHeight } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import BadgeTile from './index';

export default {
  title: 'components/organisms/BadgeTile',
  component: BadgeTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof BadgeTile> = (args) => (
  <TileWrapper isHalfTile={args.tile?.tileHeight === TileHeight.Half}>
    <BadgeTile {...args} />
  </TileWrapper>
);

export const LatestNoBadgesEarned = Template.bind({});
LatestNoBadgesEarned.args = {
  tile: createBadgeTileMock({
    id: 'latest-badge-none',
    type: BadgeTileType.Latest,
    count: 0,
  }),
};

export const LatestEarned = Template.bind({});
LatestEarned.args = {
  tile: createBadgeTileMock({
    id: 'latest-badge-earned',
    type: BadgeTileType.Latest,
    count: 1,
  }),
};

export const SpecificBadgeNotEarned = Template.bind({});
SpecificBadgeNotEarned.args = {
  tile: createBadgeTileMock({
    id: 'specific-badge-not-earned',
    type: BadgeTileType.Specific,
    count: 0,
  }),
};

export const SpecificBadgeHighCount = Template.bind({});
SpecificBadgeHighCount.args = {
  tile: createBadgeTileMock({
    id: 'specific-badge-high-count',
    type: BadgeTileType.Specific,
    count: 3,
  }),
};

export const SpecificBadgeAwardedOnce = Template.bind({});
SpecificBadgeAwardedOnce.args = {
  tile: createBadgeTileMock({
    id: 'specific-badge-once',
    type: BadgeTileType.Specific,
    count: 1,
  }),
};

export const SpecificBadgeNotEarnedNoEmpty = Template.bind({});
SpecificBadgeNotEarnedNoEmpty.args = {
  tile: createBadgeTileMock({
    id: 'specific-badge-not-earned-no-empty',
    type: BadgeTileType.Specific,
    count: 0,
    badgeNotEarnedMessage: 'Complete 5 top-ups to earn this',
  }),
};
