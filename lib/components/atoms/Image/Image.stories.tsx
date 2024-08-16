import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Image from './index';

export default {
  title: 'components/atoms/Image',
  component: Image,
} as Meta;

const Template: StoryFn = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
