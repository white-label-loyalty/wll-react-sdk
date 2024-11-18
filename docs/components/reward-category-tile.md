# Reward Category Tile

Displays reward categories with an image and optional category name overlay.

> ⚠️ **Important**: This component only supports full height tiles (`tileHeight: 'FULL'`). Half-height tiles are not supported.

## Usage

```jsx
import { RewardCategoryTile } from '@wlloyalty/wll-react-sdk'

const tile = {
  type: 'REWARD_CATEGORY',
  tileHeight: 'FULL',
  configuration: {
    showName: true,
    rewardCategoryId: '9d8287e0-bae9-47b4-8bf0-0115fd64336a',
    artworkUrl: 'https://example.com/category-image.jpg',
    name: 'Food & Beverages'
  }
}

function MyComponent() {
  return <RewardCategoryTile tile={tile} />
}
```

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tile | `Tile` | Yes | Reward category tile configuration |

## Configuration Object

| Property | Type | Description |
|----------|------|-------------|
| showName | boolean | Whether to display category name overlay |
| rewardCategoryId | string | Unique identifier for the reward category |
| artworkUrl | string | Category image URL |
| name | string | Category name |

## States

- **With Name Overlay**: Displays category image with name overlay
- **Without Name Overlay**: Displays category image only (when showName is false)

## Composition

- `RewardCategoryTile.Image` - Category image display
- `RewardCategoryTile.Name` - Category name overlay (when showName is true)