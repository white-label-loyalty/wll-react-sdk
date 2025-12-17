import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ContentTile from '.';
import { createContentTileMock } from '../../../mocks/tiles';
import { CTALinkTarget, TileHeight } from '../../../types/tile';
import { TileWrapper } from '../../../utils/storybookHelpers';

export default {
  title: 'components/organisms/ContentTile',
  component: ContentTile,
  tags: ['autodocs'],
} as Meta<typeof ContentTile>;

const Template: StoryFn<typeof ContentTile> = (args) => (
  <TileWrapper isHalfTile={args.tile?.tileHeight === TileHeight.Half}>
    <ContentTile {...args} />
  </TileWrapper>
);

export const FullSizeWelcomeTier = Template.bind({});
FullSizeWelcomeTier.args = {
  tile: createContentTileMock(),
};

export const ImageWithLongTitleAndBody = Template.bind({});
ImageWithLongTitleAndBody.args = {
  tile: createContentTileMock({
    title:
      'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
    body: `This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.`,
    artworkUrl:
      'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
  }),
};

export const FullSizeRewardHighlight = Template.bind({});
FullSizeRewardHighlight.args = {
  tile: createContentTileMock({
    title: undefined,
    body: undefined,
    artworkUrl:
      'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
  }),
};

export const FullSizeMilestoneAlert = Template.bind({});
FullSizeMilestoneAlert.args = {
  tile: createContentTileMock({
    title: 'Almost at Platinum!',
    body: "You're just 500 points away from reaching Platinum status. Make a purchase today to unlock premium rewards!",
    artworkUrl: undefined,
  }),
};

export const FullSizePointsExpiry = Template.bind({});
FullSizePointsExpiry.args = {
  tile: createContentTileMock({
    title: 'Points Expiring Soon',
    body: 'Your 2,500 reward points will expire at the end of this month. Redeem now for exclusive rewards or extend your points balance with your next purchase.',
    artworkUrl: undefined,
  }),
};

export const HalfSizeBirthdayReward = Template.bind({});
HalfSizeBirthdayReward.args = {
  tile: createContentTileMock({
    tileHeight: TileHeight.Half,
    title: undefined,
    body: undefined,
    artworkUrl:
      'https://images.pexels.com/photos/3123915/pexels-photo-3123915.jpeg',
  }),
};

export const HalfSizePointsBoost = Template.bind({});
HalfSizePointsBoost.args = {
  tile: createContentTileMock({
    tileHeight: TileHeight.Half,
    title: '3X Points Weekend!',
    body: 'Earn triple points on all purchases this weekend only.',
    artworkUrl: undefined,
  }),
};

export const HalfSizeReferralBonus = Template.bind({});
HalfSizeReferralBonus.args = {
  tile: createContentTileMock({
    tileHeight: TileHeight.Half,
    title: 'Refer & Earn',
    body: 'Get 1,000 bonus points for each friend you refer',
    artworkUrl: undefined,
    ctaLink: '/referral-program',
    ctaLinkTarget: CTALinkTarget.sameWindow,
  }),
};

export const FullSizePartnerRewards = Template.bind({});
FullSizePartnerRewards.args = {
  tile: createContentTileMock({
    title: 'New Partner Rewards!',
    body: 'Now earn points at our partner locations. Click to view participating partners.',
    artworkUrl:
      'https://images.pexels.com/photos/7236026/pexels-photo-7236026.jpeg',
    ctaLink: '/partner-locations',
    ctaLinkTarget: CTALinkTarget.newWindow,
  }),
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  tile: createContentTileMock({
    title:
      'This is a long standalone title that should take up multiple lines if needed to test overflow and clamping behaviour',
    body: undefined,
    artworkUrl: undefined,
  }),
};

export const BodyOnly = Template.bind({});
BodyOnly.args = {
  tile: createContentTileMock({
    title: undefined,
    body: `This is a standalone body text block that should be allowed to expand as much as it needs, up to the vertical limit of the tile component. We're including multiple lines of text here to simulate the edge case and ensure that nothing is getting cut off unnecessarily at smaller or intermediate viewports.`,
    artworkUrl: undefined,
  }),
};

export const TitleAndBody = Template.bind({});
TitleAndBody.args = {
  tile: createContentTileMock({
    title: 'Short Title (should be clamped to 2 lines max)',
    body: `This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.`,
    artworkUrl: undefined,
  }),
};

export const HalfSizeTitleOnly = Template.bind({});
HalfSizeTitleOnly.args = {
  tile: createContentTileMock({
    tileHeight: TileHeight.Half,
    title:
      'Limited Time Offer with a long title that should be clamped to 2 lines max!',
    body: undefined,
    artworkUrl: undefined,
  }),
};

export const HalfSizeBodyOnly = Template.bind({});
HalfSizeBodyOnly.args = {
  tile: createContentTileMock({
    tileHeight: TileHeight.Half,
    title: undefined,
    body: "Earn double points this weekend on all eligible purchases. This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.",
    artworkUrl: undefined,
  }),
};

export const HalfSizeTitleAndBody = Template.bind({});
HalfSizeTitleAndBody.args = {
  tile: createContentTileMock({
    tileHeight: TileHeight.Half,
    title:
      'Flash Sale with a long title that should be clamped to 1 lines max!',
    body: "Save 30% on all rewards until midnight. This body should fill the remaining space in the tile. If the title truncates correctly, this block should comfortably sit underneath and occupy the rest of the tile's vertical real estate.",
    artworkUrl: undefined,
  }),
};

export const ResponsiveTest = Template.bind({});
ResponsiveTest.args = {
  tile: createContentTileMock({
    tileHeight: TileHeight.Full,
    title: 'Responsive test',
    body: 'Should behave differently at 320, 768, and 1024',
  }),
};

export const HalfSizeArtworkOnly = Template.bind({});
HalfSizeArtworkOnly.args = {
  tile: createContentTileMock({
    tileHeight: TileHeight.Half,
    title: undefined,
    body: undefined,
    artworkUrl:
      'https://images.pexels.com/photos/3123915/pexels-photo-3123915.jpeg',
  }),
};
