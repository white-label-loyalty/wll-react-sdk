# Tile Components

The SDK provides various tile components for displaying different types of content. All tile components support both direct data passing and fetching by ID.

## Common Features

All tile components share these common features:

- Automatic loading states with skeletons
- Error handling
- Support for fetching by ID
- Responsive design

## Usage

### With Direct Data

```jsx
import { ContentTile, RewardTile } from '@wlloyalty/wll-react-native-sdk';

function MyComponent() {
  const tileData = {
    type: 'CONTENT',
    title: 'My Content',
    // ... other tile properties
  };

  return <ContentTile tile={tileData} />;
}
```

### Fetching by ID

All tile components support fetching by ID:

```jsx
import { ContentTile, RewardTile } from '@wlloyalty/wll-react-native-sdk';

function MyComponent() {
  return (
    <>
      <ContentTile tileId="content-tile-id" />
      <RewardTile tileId="reward-tile-id" />
    </>
  );
}
```

## Props

Each tile component accepts these common props:

| Name   | Type     | Required | Description             |
| ------ | -------- | -------- | ----------------------- |
| tile   | `Tile`   | No       | Tile data object        |
| tileId | `string` | No       | ID of the tile to fetch |

::: tip Note
Either `tile` or `tileId` must be provided, but not both.
:::

## Loading States

When fetching a tile by ID, components will display:

- A loading skeleton during the fetch
- An error message if the fetch fails
- The tile content once loaded successfully

## Available Tile Components

| Component                | Type            | Description                       |
| ------------------------ | --------------- | --------------------------------- |
| `<ContentTile />`        | CONTENT         | Displays general content          |
| `<RewardTile />`         | REWARD          | Shows reward information          |
| `<PointsTile />`         | POINTS          | Displays points-related content   |
| `<BadgeTile />`          | BADGE           | Shows badge information           |
| `<BannerTile />`         | BANNER          | Displays banner content           |
| `<RewardCategoryTile />` | REWARD_CATEGORY | Shows reward category information |
| `<VenueTile />`          | VENUE           | Shows venue information           |

Each tile type has its own specific props and features documented in their respective component pages.
