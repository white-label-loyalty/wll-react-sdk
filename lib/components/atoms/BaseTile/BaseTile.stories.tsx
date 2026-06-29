import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { WllSdkProvider } from '../../../context/WllSdkContext';
import { createContentTileMock } from '../../../mocks/tiles';
import { TileHeight } from '../../../types/tile';
import { defaultTheme } from '../../../utils/styling';
import { TileWrapper } from '../../../utils/storybookHelpers';
import { BaseTile } from './index';

export default {
  title: 'components/atoms/BaseTile',
  component: BaseTile,
  tags: ['autodocs'],
  argTypes: {
    borderRadiusSm: {
      control: { type: 'range', min: 0, max: 40, step: 1 },
      description: 'Border radius for small/tablet breakpoints',
      defaultValue: 15,
    },
    borderRadiusLg: {
      control: { type: 'range', min: 0, max: 40, step: 1 },
      description: 'Border radius for desktop breakpoints',
      defaultValue: 20,
    },
  },
} as Meta;

type StoryArgs = {
  borderRadiusSm: number;
  borderRadiusLg: number;
};

const sdkConfig = {
  apiKey: 'test',
  coreApiUrl: 'https://api.core.wlloyalty.net/v1' as const,
};

/**
 * Template that wraps BaseTile with a custom theme to demonstrate border radius control.
 */
const Template: StoryFn<StoryArgs> = ({ borderRadiusSm, borderRadiusLg }) => {
  const theme = {
    ...defaultTheme,
    sizes: {
      borderRadiusSm,
      borderRadiusLg,
    },
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

/**
 * Template showing multiple tiles side by side to compare different border radius values.
 */
const ComparisonTemplate: StoryFn<StoryArgs> = ({
  borderRadiusSm,
  borderRadiusLg,
}) => {
  const radiusVariants = [
    { sm: 0, lg: 0, label: 'Sharp (0px)' },
    { sm: borderRadiusSm, lg: borderRadiusLg, label: 'Custom' },
    { sm: 15, lg: 20, label: 'Default (15/20)' },
    { sm: 30, lg: 40, label: 'Extra Round (30/40)' },
  ];

  const tile = createContentTileMock({
    title: 'Reward Tile',
    body: 'Demonstrating different border radius values applied via theme.sizes.',
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
            <View style={{ marginTop: 8 }}>
              <BaseTile tile={createContentTileMock({ title: label, body: `sm: ${sm}, lg: ${lg}`, artworkUrl: undefined })}>
                <BaseTile.Content>
                  <BaseTile.Header>
                    <BaseTile.Title />
                  </BaseTile.Header>
                </BaseTile.Content>
              </BaseTile>
            </View>
          </View>
        </WllSdkProvider>
      ))}
    </View>
  );
};

export const DefaultBorderRadius = Template.bind({});
DefaultBorderRadius.args = {
  borderRadiusSm: 15,
  borderRadiusLg: 20,
};

export const SharpCorners = Template.bind({});
SharpCorners.args = {
  borderRadiusSm: 0,
  borderRadiusLg: 0,
};

export const SubtleRounding = Template.bind({});
SubtleRounding.args = {
  borderRadiusSm: 4,
  borderRadiusLg: 6,
};

export const MediumRounding = Template.bind({});
MediumRounding.args = {
  borderRadiusSm: 12,
  borderRadiusLg: 16,
};

export const ExtraRound = Template.bind({});
ExtraRound.args = {
  borderRadiusSm: 30,
  borderRadiusLg: 40,
};

export const HalfTileWithBorderRadius = (() => {
  const HalfTileTemplate: StoryFn<StoryArgs> = ({
    borderRadiusSm,
    borderRadiusLg,
  }) => {
    const theme = {
      ...defaultTheme,
      sizes: {
        borderRadiusSm,
        borderRadiusLg,
      },
    };

    const tile = createContentTileMock({
      tileHeight: TileHeight.Half,
      title: '3X Points Weekend!',
      body: 'Earn triple points on all purchases this weekend only.',
      artworkUrl: undefined,
    });

    return (
      <WllSdkProvider theme={theme} config={sdkConfig}>
        <TileWrapper isHalfTile>
          <BaseTile tile={tile}>
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

  const story = HalfTileTemplate.bind({});
  story.args = {
    borderRadiusSm: 15,
    borderRadiusLg: 20,
  };
  return story;
})();

export const BorderRadiusComparison = ComparisonTemplate.bind({});
BorderRadiusComparison.args = {
  borderRadiusSm: 10,
  borderRadiusLg: 14,
};
