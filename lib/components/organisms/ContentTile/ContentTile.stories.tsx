// ContentTile.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ContentTile from '.';
import { CTALinkTarget, TileHeight, TileType } from '../../../types/tile';
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
  tile: {
    id: '1',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      title: 'Gold Tier Unlocked!',
      body: "You've unlocked exclusive Gold member benefits including 2X points on every purchase, priority support, and VIP event access.",
      artworkUrl:
        'https://images.pexels.com/photos/352097/pexels-photo-352097.jpeg',
    },
  },
};

export const FullSizeRewardHighlight = Template.bind({});
FullSizeRewardHighlight.args = {
  tile: {
    id: '2',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      artworkUrl:
        'https://images.pexels.com/photos/7679473/pexels-photo-7679473.jpeg',
    },
  },
};

export const FullSizeMilestoneAlert = Template.bind({});
FullSizeMilestoneAlert.args = {
  tile: {
    id: '3',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      title: 'Almost at Platinum!',
      body: "You're just 500 points away from reaching Platinum status. Make a purchase today to unlock premium rewards!",
    },
  },
};

export const FullSizePointsExpiry = Template.bind({});
FullSizePointsExpiry.args = {
  tile: {
    id: '3',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      title: 'Points Expiring Soon',
      body: 'Your 2,500 reward points will expire at the end of this month. Redeem now for exclusive rewards or extend your points balance with your next purchase.',
    },
  },
};

export const HalfSizeBirthdayReward = Template.bind({});
HalfSizeBirthdayReward.args = {
  tile: {
    id: '4',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    priority: 1,
    configuration: {
      artworkUrl:
        'https://images.pexels.com/photos/3123915/pexels-photo-3123915.jpeg',
    },
  },
};

export const HalfSizePointsBoost = Template.bind({});
HalfSizePointsBoost.args = {
  tile: {
    id: '5',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    priority: 1,
    configuration: {
      title: '3X Points Weekend!',
      body: 'Earn triple points on all purchases this weekend only.',
    },
  },
};

export const HalfSizeReferralBonus = Template.bind({});
HalfSizeReferralBonus.args = {
  tile: {
    id: '5',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Half,
    priority: 1,
    configuration: {
      title: 'Refer & Earn',
      body: 'Get 1,000 bonus points for each friend you refer',
      ctaLink: '/referral-program',
      ctaLinkTarget: CTALinkTarget.sameWindow,
    },
  },
};

export const FullSizePartnerRewards = Template.bind({});
FullSizePartnerRewards.args = {
  tile: {
    id: '6',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      title: 'New Partner Rewards!',
      body: 'Now earn points at our partner locations. Click to view participating partners.',
      artworkUrl:
        'https://images.pexels.com/photos/7236026/pexels-photo-7236026.jpeg',
      ctaLink: '/partner-locations',
      ctaLinkTarget: CTALinkTarget.newWindow,
    },
  },
};

export const TitleAndBody = Template.bind({});
TitleAndBody.args = {
  tile: {
    id: '8',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      title:
        'This is a long title that should now wrap to exactly two lines when body text is present below it',
      body: 'This body text should fill the remaining space after the title takes its two lines. It demonstrates how the text naturally flows in the available space while maintaining proper spacing and layout.',
      artworkUrl:
        'https://images.pexels.com/photos/7236026/pexels-photo-7236026.jpeg',
    },
  },
};
export const BodyOnly = Template.bind({});
BodyOnly.args = {
  tile: {
    id: '7',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      body: 'This is a long body text that should fill the available space when no title is present. It can contain multiple paragraphs and should demonstrate how the text flows naturally without artificial line limits. This helps us verify that the body text properly expands to use all available space in the tile.',
      artworkUrl: undefined,
    },
  },
};
export const TitleOnly = Template.bind({});
TitleOnly.args = {
  tile: {
    id: '6',
    type: TileType.Content,
    active: true,
    createdAt: '',
    updatedAt: '',
    tileHeight: TileHeight.Full,
    priority: 1,
    configuration: {
      title:
        'This is a very long title that should now be able to wrap to multiple lines when there is no body text present. It demonstrates how the title can fill the available space.',
      artworkUrl: undefined,
    },
  },
};
