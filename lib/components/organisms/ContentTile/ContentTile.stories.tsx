import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import ContentTile from '.';
import { WllSdkProvider } from '../../../context/WllSdkContext';
import { createContentTileMock } from '../../../mocks/tiles';
import { CTALinkTarget, TileHeight } from '../../../types/tile';
import { defaultTheme } from '../../../utils/styling';
import { TileWrapper } from '../../../utils/storybookHelpers';
import { BaseTile } from '../../atoms/BaseTile';

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


// --- Border Radius Stories using BaseTile as wrapper ---

const sdkConfig = {
  apiKey: 'test',
  coreApiUrl: 'https://api.core.wlloyalty.net/v1' as const,
};

const BorderRadiusBaseTileTemplate: StoryFn<{
  borderRadiusSm: number;
  borderRadiusLg: number;
}> = ({ borderRadiusSm, borderRadiusLg }) => {
  const theme = {
    ...defaultTheme,
    sizes: { borderRadiusSm, borderRadiusLg },
  };

  const tile = createContentTileMock({
    title: 'Gold Tier Unlocked!',
    body: "You've unlocked exclusive Gold member benefits including 2X points on every purchase.",
    artworkUrl:
      'https://images.pexels.com/photos/352097/pexels-photo-352097.jpeg',
  });

  return (
    <WllSdkProvider theme={theme} config={sdkConfig}>
      <TileWrapper>
        <BaseTile tile={tile}>
          <BaseTile.Media />
          <BaseTile.Content>
            <BaseTile.Header>
              <BaseTile.Title />
            </BaseTile.Header>
            <BaseTile.Body />
          </BaseTile.Content>
        </BaseTile>
      </TileWrapper>
    </WllSdkProvider>
  );
};

export const BaseTileSharpCorners = BorderRadiusBaseTileTemplate.bind({});
BaseTileSharpCorners.args = {
  borderRadiusSm: 0,
  borderRadiusLg: 0,
};
BaseTileSharpCorners.argTypes = {
  borderRadiusSm: { control: { type: 'range', min: 0, max: 40, step: 1 } },
  borderRadiusLg: { control: { type: 'range', min: 0, max: 40, step: 1 } },
};

export const BaseTileDefaultRadius = BorderRadiusBaseTileTemplate.bind({});
BaseTileDefaultRadius.args = {
  borderRadiusSm: 15,
  borderRadiusLg: 20,
};
BaseTileDefaultRadius.argTypes = {
  borderRadiusSm: { control: { type: 'range', min: 0, max: 40, step: 1 } },
  borderRadiusLg: { control: { type: 'range', min: 0, max: 40, step: 1 } },
};

export const BaseTileExtraRound = BorderRadiusBaseTileTemplate.bind({});
BaseTileExtraRound.args = {
  borderRadiusSm: 30,
  borderRadiusLg: 40,
};
BaseTileExtraRound.argTypes = {
  borderRadiusSm: { control: { type: 'range', min: 0, max: 40, step: 1 } },
  borderRadiusLg: { control: { type: 'range', min: 0, max: 40, step: 1 } },
};

/**
 * Side-by-side comparison of BaseTile with different borderRadius values.
 */
const BorderRadiusComparisonTemplate: StoryFn = () => {
  const radiusVariants = [
    { sm: 0, lg: 0, label: 'Sharp (0)' },
    { sm: 8, lg: 10, label: 'Subtle (8/10)' },
    { sm: 15, lg: 20, label: 'Default (15/20)' },
    { sm: 30, lg: 40, label: 'Extra Round (30/40)' },
  ];

  const tile = createContentTileMock({
    title: 'Reward Tile',
    body: 'Demonstrating different border radius values.',
    artworkUrl:
      'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
  });

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
      {radiusVariants.map(({ sm, lg, label }) => (
        <WllSdkProvider
          key={label}
          theme={{ ...defaultTheme, sizes: { borderRadiusSm: sm, borderRadiusLg: lg } }}
          config={sdkConfig}
        >
          <View style={{ alignItems: 'center' }}>
            <TileWrapper>
              <BaseTile tile={tile}>
                <BaseTile.Media />
                <BaseTile.Content>
                  <BaseTile.Header>
                    <BaseTile.Title />
                  </BaseTile.Header>
                  <BaseTile.Body />
                </BaseTile.Content>
              </BaseTile>
            </TileWrapper>
            <View style={{ marginTop: 4 }}>
              <ContentTile
                tile={createContentTileMock({
                  title: label,
                  body: `borderRadiusSm: ${sm}, borderRadiusLg: ${lg}`,
                  artworkUrl: undefined,
                })}
              />
            </View>
          </View>
        </WllSdkProvider>
      ))}
    </View>
  );
};

export const BaseTileBorderRadiusComparison = BorderRadiusComparisonTemplate.bind({});
