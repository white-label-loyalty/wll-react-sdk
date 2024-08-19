import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SectionHeader from './index';

export default {
  title: 'components/molecules/SectionHeader',
  component: SectionHeader,
} as Meta;

const Template: StoryFn = (args) => <SectionHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
