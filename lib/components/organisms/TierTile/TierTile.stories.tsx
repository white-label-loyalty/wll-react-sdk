import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { View } from 'react-native';
import TierTile from '.';

export default {
  title: 'components/organisms/TierTile',
  component: TierTile,
  argTypes: {
    configuration: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <View
        style={{
          width: 257,
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </View>
    ),
  ],
} as Meta<typeof TierTile>;

const Template: StoryFn<typeof TierTile> = (args) => (
  <TierTile {...args} />
);

export const InProgress = Template.bind({});
InProgress.args = {
  configuration: {
    tier: {
      id: '1',
      name: 'Gold',
      earnedPoints: 500,
      pointsRequirement: 1000,
      attained: false,
      description: '',
      artworkUrl: '',
      priority: 0,
      calculation: '',
      accumulationPeriod: '',
      effectivity: {
        start: '2024-08-21T07:41:24.883Z',
        end: null,
      },
      createdAt: '',
      updatedAt: '',
    },
  },
};

export const JustStarted = Template.bind({});
JustStarted.args = {
  configuration: {
    tier: {
      id: '1',
      name: 'Silver',
      earnedPoints: 50,
      pointsRequirement: 500,
      attained: false,
      description: '',
      artworkUrl: '',
      priority: 0,
      calculation: '',
      accumulationPeriod: '',
      effectivity: {
        start: '2024-08-21T07:41:24.883Z',
        end: null,
      },
      createdAt: '',
      updatedAt: '',
    },
  },
};

export const NearlyComplete = Template.bind({});
NearlyComplete.args = {
  configuration: {
    tier: {
      id: '1',
      name: 'Platinum',
      earnedPoints: 1900,
      pointsRequirement: 2000,
      attained: false,
      description: '',
      artworkUrl: '',
      priority: 0,
      calculation: '',
      accumulationPeriod: '',
      effectivity: {
        start: '2024-08-21T07:41:24.883Z',
        end: null,
      },
      createdAt: '',
      updatedAt: '',
    },
  },
};

export const TierAttained = Template.bind({});
TierAttained.args = {
  configuration: {
    tier: {
      id: '1',
      name: 'Diamond',
      earnedPoints: 5000,
      pointsRequirement: 5000,
      attained: true,
      description: '',
      artworkUrl: '',
      priority: 0,
      calculation: '',
      accumulationPeriod: '',
      effectivity: {
        start: '2024-08-21T07:41:24.883Z',
        end: null,
      },
      createdAt: '',
      updatedAt: '',
    },
  },
};

export const TierAttainedEarly = Template.bind({});
TierAttainedEarly.args = {
  configuration: {
    tier: {
      id: '1',
      name: 'VIP',
      earnedPoints: 8000,
      pointsRequirement: 10000,
      attained: true,
      description: '',
      artworkUrl: '',
      priority: 0,
      calculation: '',
      accumulationPeriod: '',
      effectivity: {
        start: '2024-08-21T07:41:24.883Z',
        end: null,
      },
      createdAt: '',
      updatedAt: '',
    },
  },
};

export const NoTierData = Template.bind({});
NoTierData.args = {
  configuration: {},
};
