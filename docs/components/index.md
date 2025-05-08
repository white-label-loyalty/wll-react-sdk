# Components Overview

The Loyalty Tiles SDK provides a set of flexible components for building dynamic loyalty program interfaces. These components are organized in a hierarchical structure for maximum flexibility and reusability.

## Component Architecture

### Container Components

- [`<WllSdkProvider>`](/components/wll-sdk-provider) - Root provider component that manages SDK configuration and state
- [`<Group>`](/components/group) - Container for organizing multiple sections
- [`<Section>`](/components/section) - Container for organizing related tiles and banners

### Display Components

#### Tiles

Tiles are the building blocks of your loyalty interface. Each tile type serves a specific purpose and can be configured to match your needs.

- [`<BadgeTile>`](/components/badge-tile) - Display user achievements and badges
- [`<PointsTile>`](/components/points-tile) - Show point balances and point-related information
- [`<TierTile>`](/components/tier-tile) - Present tier status and progression
- [`<RewardTile>`](/components/reward-tile) - Showcase individual rewards
- [`<RewardCategoryTile>`](/components/reward-category-tile) - Display reward categories
- [`<ContentTile>`](/components/content-tile) - Present custom content
- [`<BannerTile>`](/components/banner-tile) - Feature promotional content or announcements
- [`<RoundupTile>`](/components/roundup-tile) - Display cashback roundup information

## Basic Example

```jsx
import {
  WllSdkProvider,
  Group,
  Section,
  PointsTile,
} from '@wlloyalty/wll-react-sdk';

function App() {
  return (
    <WllSdkProvider config={sdkConfig}>
      <Group id="32697712-8dc0-4717-9775-e1f3502acc48">
        <Section>
          <PointsTile />
        </Section>
      </Group>
    </WllSdkProvider>
  );
}
```
