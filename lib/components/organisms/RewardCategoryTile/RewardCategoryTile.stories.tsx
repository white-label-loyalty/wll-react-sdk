import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RewardCategoryTile from './index';

export default {
  title: 'components/organisms/RewardCategoryTile',
  component: RewardCategoryTile,
} as Meta;

const Template: StoryFn = (args) => <RewardCategoryTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
