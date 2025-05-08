# Roundup Tile

Displays a balance or amount with customizable title, artwork, and formatting options. Designed for showing point balances, rewards, cashback amounts, or any numerical value with optional prefix/suffix. Supports both full and half-height layouts.

> ⚠️ **Important**: This component provides flexible height options with different layouts for full (`tileHeight: TileHeight.Full`) and half (`tileHeight: TileHeight.Half`) configurations. The layout adapts automatically based on the provided configuration.

## Usage

```jsx
import { RoundupTile } from '@wlloyalty/wll-react-sdk';

const tile = {
  type: 'ROUND_UP_BALANCE',
  tileHeight: 'HALF',
  configuration: {
    title: 'Points Balance',
    artworkUrl: 'https://example.com/points-icon.png',
    amount: 100,
    amountPrefix: '$',
    amountSuffix: 'pts',
    ctaLink: 'https://example.com',
    ctaLinkTarget: 'NEW_WINDOW',
  },
};

function MyComponent() {
  return <RoundupTile tile={tile} />;
}
```

## Props

| Name | Type   | Required | Description               |
| ---- | ------ | -------- | ------------------------- |
| tile | `Tile` | Yes      | Points tile configuration |

## Configuration Object

| Property      | Type   | Description                                             |
| ------------- | ------ | ------------------------------------------------------- |
| title         | string | Tile heading text                                       |
| artworkUrl    | string | Amount icon/image URL                                   |
| amount        | number | Amount value to display                                 |
| amountPrefix  | string | Text before amount value                                |
| amountSuffix  | string | Text after amount value                                 |
| ctaLink       | string | URL for call-to-action link                             |
| ctaLinkTarget | string | Target for opening link ('NEW_WINDOW' or 'SAME_WINDOW') |

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

- `RoundupTile.Title` - Displays the tile heading
- `RoundupTile.Points` - Shows formatted points value with optional prefix/suffix
- `RoundupTile.Media` - Handles artwork display with responsive sizing
- `RoundupTile.Chevron` - Displays a chevron icon for tiles with CTA links

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
- With suffix: "100 USD"
- With both: "$100 pts"
