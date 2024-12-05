import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import SectionHeader from './index';

export default {
  title: 'components/molecules/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof SectionHeader> = (args) => (
  <SectionHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Exclusive Offers',
  description: 'Check out our latest promotions!',
};
