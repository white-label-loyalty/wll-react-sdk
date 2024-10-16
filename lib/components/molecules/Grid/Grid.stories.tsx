import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { View } from 'react-native';
import { SectionType } from '../../../types/section';
import {
  ProgressType,
  TierTileType,
  TileHeight,
  TileType,
} from '../../../types/tile';
import Grid from './index';

export default {
  title: 'components/molecules/Grid',
  component: Grid,
  decorators: [
    (Story) => (
      <View
        style={{
          width: 1080,
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

const Template: StoryFn<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  section: {
    name: 'Section2',
    type: SectionType.Grid,
    active: true,
    pointsMultiplier: 1,
    pointsPrefix: null,
    pointsSuffix: null,
    id: '84739810-37f5-4621-8433-8e0b61e09a5e',
    createdAt: '2024-10-15T13:36:00.204Z',
    updatedAt: '2024-10-15T13:36:00.204Z',
    title: undefined,
    description: undefined,
    priority: 1,
    tiles: [
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Points,
        configuration: {
          title: 'Points balance',
          artworkUrl: 'https://i.ibb.co/s2zBvWD/gold.png',
          points: 300,
        },
        id: 'fda02f0c-7aee-4016-8ac7-f0ec6c168106',
        createdAt: '2024-10-15T13:28:49.613Z',
        updatedAt: '2024-10-15T13:28:49.613Z',
        priority: 3,
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Tier,
        configuration: {
          type: TierTileType.currentTier,
          tierId: '54f0658a-9409-41f7-a508-ca02c6ac23e1',
          progressType: ProgressType.Name,
          tier: {
            id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
            name: 'Bronze',
            description: undefined,
            artworkUrl: undefined,
            pointsRequirement: 100,
            priority: 0,
          },
        },
        id: '89255d20-737a-4aa9-af12-9266b4b1dedf',
        createdAt: '2024-10-15T13:24:28.991Z',
        updatedAt: '2024-10-15T13:24:28.991Z',
        priority: 2,
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Tier,
        configuration: {
          type: TierTileType.currentTargetSpecific,
          tierId: '95a6405a-36d9-471e-9ccb-75088c6f2ba6',
          progressType: ProgressType.Points,
          tier: {
            id: '11ff96d2-c87b-4c89-bf5c-996604fc4d28',
            name: 'Bronze',
            description: null,
            artworkUrl: null,
            pointsRequirement: 100,
            priority: 0,
          },
          targetTier: {
            id: '95a6405a-36d9-471e-9ccb-75088c6f2ba6',
            name: 'Silver',
            pointsRequirement: 2000,
            attained: false,
            artworkUrl: null,
            earnedPoints: 300,
            priority: 0,
          },
        },
        id: '11ac9b70-f025-4184-8372-7acbf0ac08cd',
        createdAt: '2024-10-15T13:21:40.133Z',
        updatedAt: '2024-10-15T13:21:40.133Z',
        priority: 1,
      },
      {
        tileHeight: TileHeight.Half,
        active: true,
        type: TileType.Content,
        configuration: {
          title: 'Welcome Graeme',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        id: '95d0cf59-198b-48b2-9f42-931cd28bee6e',
        createdAt: '2024-10-15T11:38:59.522Z',
        updatedAt: '2024-10-15T11:38:59.522Z',
        priority: 0,
      },
    ],
  },
};
