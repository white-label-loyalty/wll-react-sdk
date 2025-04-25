/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    // '../lib/components/atoms/Skeleton/Skeleton.stories.tsx',
    // '../../lib/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
};
