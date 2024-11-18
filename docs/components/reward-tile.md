# Reward Tile

A compound component that displays reward information with configurable media, title, description, points, and navigation elements.

> ⚠️ **Important**: This component requires the `WllSdkContext` to be properly set up in the parent tree. The component supports both full and half-height layouts.

## Usage

```jsx
import { RewardTile } from '@wlloyalty/wll-react-native-sdk'

const tile = {
  type: 'REWARD',
  tileHeight: 'FULL',
  configuration: {
    name: 'Sweet Chilli Lobster Noodles',
    pictureUrl: 'https://example.com/noodles.jpg',
    price: 800,
    showPrice: true,
    showArtwork: true,
    summary: 'Delicious noodles with fresh lobster',
    pointsMultiplier: '1',
    pointsPrefix: '$',
    pointsSuffix: 'pts'
  }
}

function MyComponent() {
  return <RewardTile tile={tile} />
}
```

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tile | `Tile` | Yes | Reward tile configuration object |

## Subcomponents

| Component | Description |
|-----------|-------------|
| `RewardTile.Media` | Displays reward image |
| `RewardTile.Title` | Shows reward name |
| `RewardTile.Description` | Renders reward summary |
| `RewardTile.Points` | Shows calculated points with prefix/suffix |
| `RewardTile.Chevron` | Navigation indicator |
| `RewardTile.Content` | Content wrapper with padding |

## Configuration Object

| Property | Type | Description |
|----------|------|-------------|
| name | string | Reward title |
| pictureUrl | string | Image URL |
| price | number | Reward price |
| showPrice | boolean | Whether to display price |
| showArtwork | boolean | Whether to display image |
| summary | string | Description text |
| pointsMultiplier | string | Points calculation multiplier |
| pointsPrefix | string | Points display prefix |
| pointsSuffix | string | Points display suffix |

## Styling

The component uses responsive styles with:
- 50% flex basis for image container
- Responsive padding and margins
- Configurable image resize mode
- Responsive text sizes
- Theme-based colors

## States

- **With Media**: Displays image when pictureUrl is provided
- **With Points**: Shows calculated points when price and showPrice are true
- **Without Description**: Hides description when summary is missing
- **Without Price**: Hides points when price is 0 or showPrice is false

## Points Calculation

Points are calculated using:
```typescript
calculatedPoints = price * (Number(pointsMultiplier) || 1)
```

## Example Response Structure

```typescript
{
  tileHeight: 'FULL',
  active: true,
  type: 'REWARD',
  configuration: {
    name: 'Sweet Chilli Lobster Noodles',
    pictureUrl: 'https://example.com/noodles.jpg',
    price: 800,
    showPrice: true,
    showArtwork: true,
    summary: 'Delicious noodles with fresh lobster',
    pointsMultiplier: '1',
    pointsPrefix: '$',
    pointsSuffix: 'pts'
  },
  priority: 3
}
```