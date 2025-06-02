/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: [
    "../../lib/components/atoms/Button/Button.stories.tsx",
    "../../lib/components/atoms/ProgressBar/ProgressBar.stories.tsx",
    "../../lib/components/atoms/ProgressiveImage/ProgressiveImage.stories.tsx",
    "../../lib/components/atoms/Skeleton/Skeleton.stories.tsx",
    "../../lib/components/atoms/Text/Text.stories.tsx"
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-backgrounds",
  ],
};
