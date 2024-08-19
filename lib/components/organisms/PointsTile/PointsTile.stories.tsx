import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PointsTile from './index';

export default {
  title: 'components/organisms/PointsTile',
  component: PointsTile,
} as Meta;

const Template: StoryFn = (args) => <PointsTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
