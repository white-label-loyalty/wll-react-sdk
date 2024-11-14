import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RowHeader from './index';

export default {
  title: 'components/atoms/RowHeader',
  component: RowHeader,
} as Meta;

const Template: StoryFn<typeof RowHeader> = (args) => <RowHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
