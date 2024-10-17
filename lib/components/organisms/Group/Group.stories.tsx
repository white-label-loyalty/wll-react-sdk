import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import Group from './index';

export default {
  title: 'components/organisms/Group',
  component: Group,
  decorators: [(Story) => <Story />],
} as Meta;

const mockGroupData = {
  status: 'success',
  data: {
    name: 'Group2',
    active: true,
    id: '00a2cb62-911f-49fd-8f1c-a61ddc0fbdce',
    createdAt: '2024-10-15T14:21:06.135Z',
    updatedAt: '2024-10-16T10:00:09.823Z',
    sections: [
      {
        name: 'Banner Tiles',
        type: 'BANNER',
        active: true,
        pointsMultiplier: '1',
        pointsPrefix: null,
        pointsSuffix: null,
        id: '3a70a8dc-54a9-47b4-893b-ab1b882fc2d6',
        createdAt: '2024-10-17T11:40:50.073Z',
        updatedAt: '2024-10-17T11:40:50.073Z',
        title: 'Banner Rewards',
        description:
          'Welcome to WLL Explorer! Find out more about our exciting loyalty program.',
        visibilityCriteria: null,
        priority: 3,
        tiles: [
          // ... (include all tiles from the API response)
        ],
      },
      // ... (include all other sections from the API response)
    ],
  },
};

const Template: StoryFn<typeof Group> = (args) => {
  // Mock the useWllSdk hook
  const mockUseWllSdk = () => ({
    getGroupByID: async () => Promise.resolve(mockGroupData),
  });

  return <Group {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  id: '00a2cb62-911f-49fd-8f1c-a61ddc0fbdce',
};
