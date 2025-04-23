import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'components/atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    numberOfSquares: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of skeleton tiles to display',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton (number or percentage)',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (number or percentage)',
    },
    borderRadius: {
      control: { type: 'number', min: 0 },
      description: 'Border radius of the skeleton tiles',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    numberOfSquares: 4,
  },
};

export const FewerTiles: Story = {
  args: {
    numberOfSquares: 2,
  },
};

export const CustomStyle: Story = {
  args: {
    numberOfSquares: 4,
    style: {
      maxWidth: 400,
    },
  },
};
