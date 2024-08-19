import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import BadgeTile from './index';

export default {
  title: 'components/organisms/BadgeTile',
  component: BadgeTile,
} as Meta;

const Template: StoryFn = (args) => <BadgeTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
