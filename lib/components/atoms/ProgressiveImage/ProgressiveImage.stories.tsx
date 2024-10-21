import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ProgressiveImage from './index';

export default {
  title: 'components/atoms/ProgressiveImage',
  component: ProgressiveImage,
} as Meta;

const Template: StoryFn<typeof ProgressiveImage> = (args) => <ProgressiveImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
