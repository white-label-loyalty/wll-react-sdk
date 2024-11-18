# Points Tile

Displays points balance with customizable title, artwork, and points formatting. Supports both full and half-height layouts.

> ⚠️ **Important**: This component provides flexible height options with different layouts for full (`tileHeight: 'FULL'`) and half (`tileHeight: 'HALF'`) configurations.

## Usage

```jsx
import { PointsTile } from '@wlloyalty/wll-react-sdk'

const tile = {
  type: 'POINTS',
  tileHeight: 'HALF',
  configuration: {
    title: 'Points Balance',
    artworkUrl: 'https://example.com/points-icon.png',
    points: 100,
    prefix: '$',
    suffix: 'pts',
    multiplier: 1
  }
}

function MyComponent() {
  return <PointsTile tile={tile} />
}
```

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tile | `Tile` | Yes | Points tile configuration |

## Configuration Object

| Property | Type | Description |
|----------|------|-------------|
| title | string | Tile heading text |
| artworkUrl | string | Points icon/image URL |
| points | number | Points value to display |
| prefix | string | Text before points value |
| suffix | string | Text after points value |
| multiplier | number | Points multiplier value |

## Layout Options

### Half Height (`tileHeight: 'HALF'`)
- 2:1 aspect ratio
- Compact layout
- Centered content
- Smaller artwork display

### Full Height (`tileHeight: 'FULL'`)
- 1:1 aspect ratio
- Expanded layout
- Larger artwork display
- More white space

## Composition

- `PointsTile.Title` - Displays the tile heading
- `PointsTile.Points` - Shows formatted points value with optional prefix/suffix
- `PointsTile.Image` - Handles artwork display with responsive sizing

## States

- **Basic Display**: Shows points value only
- **With Prefix/Suffix**: Displays formatted points with additional text
- **With Multiplier**: Applies multiplier to points value
- **With Artwork**: Shows points icon/image
- **Without Artwork**: Text-only display

## Example Configurations

```typescript
// Half-height basic points display
{
  tileHeight: 'HALF',
  configuration: {
    title: 'Points Balance',
    points: 100
  }
}

// Full-height formatted points
{
  tileHeight: 'FULL',
  configuration: {
    title: 'Rewards Balance',
    points: 1000,
    prefix: '$',
    suffix: 'points',
    multiplier: 2,
    artworkUrl: 'https://example.com/points.png'
  }
}
```

## Points Formatting

The component handles various display formats:
- Basic number: "100"
- With prefix: "$100"
- With suffix: "100 pts"
- With both: "$100 pts"
- With multiplier: Shows calculated value

