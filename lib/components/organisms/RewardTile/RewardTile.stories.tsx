import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RewardTile from './index';

export default {
  title: 'components/organisms/RewardTile',
  component: RewardTile,
} as Meta;

const Template: StoryFn = (args) => <RewardTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
