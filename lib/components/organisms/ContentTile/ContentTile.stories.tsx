import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ContentTile from './index';

export default {
  title: 'components/organisms/ContentTile',
  component: ContentTile,
} as Meta;

const Template: StoryFn = (args) => <ContentTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
