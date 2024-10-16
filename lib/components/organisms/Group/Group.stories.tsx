import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Group from './index';

export default {
  title: 'components/organisms/Group',
  component: Group,
} as Meta;

const Template: StoryFn<typeof Group> = (args) => <Group {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
