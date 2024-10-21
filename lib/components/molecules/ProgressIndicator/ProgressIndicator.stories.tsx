import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ProgressIndicator, { ProgressIndicatorProps } from '.';

export default {
  title: 'components/molecules/ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {
    currentPoints: { control: { type: 'number', min: 0, max: 100 } },
    maxPoints: { control: { type: 'number', min: 1, max: 100 } },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent'],
    },
    height: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} as Meta<typeof ProgressIndicator>;

const Template: StoryFn<ProgressIndicatorProps> = (args) => (
  <ProgressIndicator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  currentPoints: 50,
  maxPoints: 100,
  variant: 'primary',
  height: 'sm',
};

export const Incomplete = Template.bind({});
Incomplete.args = {
  currentPoints: 30,
  maxPoints: 100,
  variant: 'primary',
  height: 'sm',
};

export const AlmostComplete = Template.bind({});
AlmostComplete.args = {
  currentPoints: 90,
  maxPoints: 100,
  variant: 'primary',
  height: 'sm',
};

export const Complete = Template.bind({});
Complete.args = {
  currentPoints: 100,
  maxPoints: 100,
  variant: 'primary',
  height: 'sm',
};
