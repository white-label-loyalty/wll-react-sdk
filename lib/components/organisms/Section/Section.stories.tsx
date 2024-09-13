import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Section } from '../../../components/organisms';
import { SectionType } from '../../../types/section';
import {
  CtaAction,
  TierTileType,
  TileHeight,
  TileType,
} from '../../../types/tile';

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

const Template: StoryFn<typeof Section> = (args) => (
  <Section {...args} />
);

export const GridWithTitleAndDescription = Template.bind({});
GridWithTitleAndDescription.args = {
  section: {
    id: '1',
    type: SectionType.Grid,
    title: 'Featured Offers',
    description: 'Check out our latest promotions!',
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tiles: [
      {
        id: '1',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: '1',
          name: 'Gold',
          earnedPoints: 500,
          pointsRequirement: 1000,
          attained: false,
        },
      },
      {
        id: '2',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.nextTier,
          tierId: '2',
          name: 'Gold',
          earnedPoints: 500,
          pointsRequirement: 1000,
          attained: false,
        },
      },
      {
        id: '3',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.specificTier,
          tierId: '3',
          name: 'Gold',
          earnedPoints: 500,
          pointsRequirement: 1000,
          attained: false,
        },
      },
      {
        id: '4',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: '4',
          name: 'Gold',
          earnedPoints: 500,
          pointsRequirement: 1000,
          attained: false,
        },
      },
      {
        id: '2',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.nextTier,
          tierId: '2',
          name: 'Gold',
          earnedPoints: 500,
          pointsRequirement: 1000,
          attained: false,
        },
      },
      {
        id: '3',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.specificTier,
          tierId: '3',
          // TODO: Add logic to fetch the tier data from the API at the moment just using fake data to style components
          name: 'Gold',
          earnedPoints: 500,
          pointsRequirement: 1000,
          attained: false,
        },
      },
    ],
  },
};

export const GridWithoutTitleAndDescription = Template.bind({});
GridWithoutTitleAndDescription.args = {
  section: {
    id: '1',
    type: SectionType.Grid,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tiles: [
      {
        id: '1',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: '1',
          // TODO Add logic to fetch the tier data from the API at the moment just using fake data to style components
          name: 'Gold',
          earnedPoints: 500,
          pointsRequirement: 1000,
          attained: false,
        },
      },
      {
        id: '2',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.nextTier,
          tierId: '2',
          name: 'Silver',
          earnedPoints: 50,
          pointsRequirement: 500,
          attained: false,
        },
      },
      {
        id: '3',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.specificTier,
          tierId: '3',
          name: 'Platinum',
          earnedPoints: 1900,
          pointsRequirement: 2000,
          attained: false,
        },
      },
      {
        id: '4',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          tierTileType: TierTileType.currentTier,
          tierId: '4',
          name: 'Diamond',
          earnedPoints: 5000,
          pointsRequirement: 5000,
          attained: true,
        },
      },
      {
        id: '2',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.nextTier,
          tierId: '2',
          name: 'Diamond',
          earnedPoints: 5000,
          pointsRequirement: 5000,
          attained: true,
        },
      },
      {
        id: '3',
        type: TileType.Tier,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Half,
        configuration: {
          tierTileType: TierTileType.specificTier,
          tierId: '3',
          name: 'VIP',
          earnedPoints: 8000,
          pointsRequirement: 10000,
          attained: true,
        },
      },
    ],
  },
};

export const BannerWithTitleAndDescription = Template.bind({});
BannerWithTitleAndDescription.args = {
  section: {
    id: '2',
    type: SectionType.Banner,
    title: 'Featured Offers',
    description: 'Check out our latest promotions!',
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tiles: [
      {
        id: 'banner1',
        type: TileType.Banner,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          imageUrl:
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          title: 'Summer Sale',
          description: 'Get up to 50% off on selected items!',
          ctaText: 'Shop Now',
          ctaUrl: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          ctaAction: CtaAction.sameWindow,
        },
      },
      {
        id: 'banner2',
        type: TileType.Banner,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          imageUrl:
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          title: 'Summer Sale',
          description: 'Get up to 50% off on selected items!',
          ctaText: 'Shop Now',
          ctaUrl: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          ctaAction: CtaAction.sameWindow,
        },
      },
      {
        id: 'banner3',
        type: TileType.Banner,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          imageUrl:
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          title: 'Summer Sale',
          description: 'Get up to 50% off on selected items!',
          ctaText: 'Shop Now',
          ctaUrl: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          ctaAction: CtaAction.sameWindow,
        },
      },
    ],
  },
};

export const BannerWithoutTileAndDescription = Template.bind({});
BannerWithoutTileAndDescription.args = {
  section: {
    id: '2',
    type: SectionType.Banner,
    sectionId: '2',
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tiles: [
      {
        id: 'banner1',
        type: TileType.Banner,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          imageUrl:
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          title: 'Summer Sale',
          description: 'Get up to 50% off on selected items!',
          ctaText: 'Shop Now',
          ctaUrl: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          ctaAction: CtaAction.sameWindow,
        },
      },
      {
        id: 'banner2',
        type: TileType.Banner,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          imageUrl:
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          title: 'Summer Sale',
          description: 'Get up to 50% off on selected items!',
          ctaText: 'Shop Now',
          ctaUrl: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          ctaAction: CtaAction.sameWindow,
        },
      },
      {
        id: 'banner3',
        type: TileType.Banner,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          imageUrl:
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          title: 'Summer Sale',
          description: 'Get up to 50% off on selected items!',
          ctaText: 'Shop Now',
          ctaUrl: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          ctaAction: CtaAction.sameWindow,
        },
      },
    ],
  },
};

export const BannerWithSingleBanner = Template.bind({});
BannerWithSingleBanner.args = {
  section: {
    id: '2',
    type: SectionType.Banner,
    createdAt: new Date(),
    updatedAt: new Date(),
    tenantId: 'tenant1',
    visibilityCriteria: 'all',
    tiles: [
      {
        id: 'banner1',
        type: TileType.Banner,
        createdAt: new Date(),
        updatedAt: new Date(),
        tenantId: 'tenant1',
        visibilityCriteria: 'all',
        tileHeight: TileHeight.Full,
        configuration: {
          imageUrl:
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          title: 'Summer Sale',
          description: 'Get up to 50% off on selected items!',
          ctaText: 'Shop Now',
          ctaUrl: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          ctaAction: CtaAction.sameWindow,
        },
      },
    ],
  },
};
