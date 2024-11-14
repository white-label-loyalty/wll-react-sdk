import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { View } from 'react-native';
import { SectionType } from '../../../types/section';
import { TileHeight, TileType } from '../../../types/tile';
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
