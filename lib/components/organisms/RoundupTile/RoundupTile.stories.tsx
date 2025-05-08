import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { createRoundupTileMock } from '../../../mocks/tiles/roundupTile';
import { CTALinkTarget, TileHeight } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';
import { RoundupTile } from './index';
// @ts-ignore
import pointsImage from '../../../assets/points.png';
// @ts-ignore
// @ts-ignore
import airmiles from '../../../assets/airmiles.png';
// @ts-ignore
import coins from '../../../assets/coins.png';
// @ts-ignore
import cashback from '../../../assets/cashback.png';
// @ts-ignore
import stars from '../../../assets/stars.png';

export default {
  title: 'components/organisms/RoundupTile',
  component: RoundupTile,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof RoundupTile> = (args) => (
  <TileWrapper isHalfTile={args.tile?.tileHeight === TileHeight.Half}>
    <RoundupTile {...args} />
  </TileWrapper>
);
export const ZeroBalance = Template.bind({});
ZeroBalance.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Half,
    title: 'Available Balance',
    artworkUrl: pointsImage,
    amount: 0,
    amountPrefix: '£',
  }),
};

export const StandardBalance = Template.bind({});
StandardBalance.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Half,
    title: 'Available Balance',
    artworkUrl: pointsImage,
    amount: 2750,
    amountSuffix: '£',
  }),
};

export const CashbackRewards = Template.bind({});
CashbackRewards.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Half,
    title: 'Cashback Earned',
    artworkUrl: cashback,
    amount: 125,
    amountPrefix: '',
    amountSuffix: 'USD',
  }),
};

export const StarRewards = Template.bind({});
StarRewards.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Full,
    title: 'Stars Balance',
    artworkUrl: stars,
    amount: 48,
    amountSuffix: 'stars',
  }),
};

export const MileageProgram = Template.bind({});
MileageProgram.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Full,
    title: 'Air Miles Balance',
    artworkUrl: airmiles,
    amount: 25840,
    amountSuffix: 'miles',
  }),
};

export const AccountBalance = Template.bind({});
AccountBalance.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Half,
    title: 'Your Balance',
    artworkUrl: coins,
    amount: 15750,
    amountSuffix: 'GBP',
  }),
};

export const RewardBalance = Template.bind({});
RewardBalance.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Full,
    title: 'Reward Balance',
    artworkUrl: coins,
    amount: 1250,
    amountPrefix: '',
    amountSuffix: 'GBP',
  }),
};

export const EliteBalance = Template.bind({});
EliteBalance.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Half,
    title: 'Elite Balance',
    artworkUrl: pointsImage,
    amount: 50000,
    amountSuffix: 'USD',
  }),
};

export const WithCtaLink = Template.bind({});
WithCtaLink.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Full,
    title: 'Rewards Program',
    artworkUrl: pointsImage,
    amount: 7500,
    amountPrefix: '$',
    ctaLink: 'https://example.com/rewards',
    ctaLinkTarget: CTALinkTarget.sameWindow,
  }),
};

export const WithCtaLinkHalf = Template.bind({});
WithCtaLinkHalf.args = {
  tile: createRoundupTileMock({
    tileHeight: TileHeight.Half,
    title: 'Rewards Program',
    amount: 7500,
    amountPrefix: '$',
    artworkUrl: pointsImage,
    ctaLink: 'https://example.com/rewards',
    ctaLinkTarget: CTALinkTarget.sameWindow,
  }),
};
