import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { Section } from '../../../components/organisms';

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
