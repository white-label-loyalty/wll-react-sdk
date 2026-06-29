/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: [
    // Atoms
    "../../lib/components/atoms/BaseTile/BaseTile.stories.tsx",
    "../../lib/components/atoms/Button/Button.stories.tsx",
    "../../lib/components/atoms/Chip/Chip.stories.tsx",
    "../../lib/components/atoms/Icon/Icon.stories.tsx",
    "../../lib/components/atoms/ProgressBar/ProgressBar.stories.tsx",
    "../../lib/components/atoms/ProgressiveImage/ProgressiveImage.stories.tsx",
    "../../lib/components/atoms/Skeleton/Skeleton.stories.tsx",
    "../../lib/components/atoms/Text/Text.stories.tsx",
    // Molecules
    "../../lib/components/molecules/Carousel/Carousel.stories.tsx",
    "../../lib/components/molecules/Grid/Grid.stories.tsx",
    "../../lib/components/molecules/ProgressIndicator/ProgressIndicator.stories.tsx",
    "../../lib/components/molecules/SectionHeader/SectionHeader.stories.tsx",
    // Organisms
    "../../lib/components/organisms/BadgeTile/BadgeTile.stories.tsx",
    "../../lib/components/organisms/BannerTile/BannerTile.stories.tsx",
    "../../lib/components/organisms/ContentTile/ContentTile.stories.tsx",
    "../../lib/components/organisms/Group/Group.stories.tsx",
    "../../lib/components/organisms/PointsTile/PointsTile.stories.tsx",
    "../../lib/components/organisms/RewardCategoryTile/RewardCategoryTile.stories.tsx",
    "../../lib/components/organisms/RewardTile/RewardTile.stories.tsx",
    "../../lib/components/organisms/RoundupTile/RoundupTile.stories.tsx",
    "../../lib/components/organisms/Section/Section.stories.tsx",
    "../../lib/components/organisms/TierTileUpdated/TierTileUpdated.stories.tsx",
    "../../lib/components/organisms/VenueTile/VenueTile.stories.tsx",
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-backgrounds",
  ],
};
