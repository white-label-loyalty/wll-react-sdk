import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TierTileUpdated from './index';

export default {
  title: 'components/organisms/TierTileUpdated',
  component: TierTileUpdated,
} as Meta;

const Template: StoryFn<typeof TierTileUpdated> = (args) => <TierTileUpdated {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};
