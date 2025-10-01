import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Chip, { ChipProps } from './index';
import { StatusVariant } from '../../../types/tile';

const meta: Meta<typeof Chip> = {
  title: 'components/atoms/Chip',
  component: Chip,
  args: {
    label: 'Program status',
    variant: StatusVariant.PRIMARY,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(StatusVariant),
    },
  },
};

export default meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Program status',
  variant: StatusVariant.PRIMARY,
};

export const Green = Template.bind({});
Green.args = {
  label: 'Success status',
  variant: StatusVariant.GREEN,
};

export const Grey = Template.bind({});
Grey.args = {
  label: 'Inactive status',
  variant: StatusVariant.GREY,
};
