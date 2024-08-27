import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import LoadingIndicator from './index';

export default {
  title: 'components/atoms/LoadingIndicator',
  component: LoadingIndicator,
} as Meta;

const Template: StoryFn = (args) => <LoadingIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
