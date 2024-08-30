import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BaseTile from './index';

export default {
  title: 'components/atoms/BaseTile',
  component: BaseTile,
} as Meta;

const Template: StoryFn<typeof BaseTile> = (args) => <BaseTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
