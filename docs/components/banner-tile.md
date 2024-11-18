# Banner Tile

Displays promotional banners with an image, text content, and optional call-to-action button.

> ⚠️ **Important**: This component only supports full height tiles (`tileHeight: 'FULL'`). Half-height tiles are not supported.

## Usage

```jsx
import { BannerTile } from '@wlloyalty/wll-react-sdk'

const tile = {
  type: 'BANNER',
  tileHeight: 'FULL',
  configuration: {
    artworkUrl: 'https://example.com/banner.jpg',
    title: 'Summer Sale',
    description: 'Get up to 50% off on selected items!',
    ctaText: 'SHOP NOW',
    ctaLink: 'https://www.example.com',
    ctaLinkTarget: 'SAME_FRAME'
  }
}

function MyComponent() {
  return <BannerTile tile={tile} />
}
```

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tile | `Tile` | Yes | Banner tile configuration |

## Configuration Object

| Property | Type | Description |
|----------|------|-------------|
| artworkUrl | string | Banner image URL |
| title | string | Banner headline |
| description | string | Banner description text |
| ctaText | string | Button text (optional) |
| ctaLink | string | URL, path (/activity), or trigger (#modal-name) |
| ctaLinkTarget | 'SAME_FRAME' \| 'NEW_WINDOW' | Link target behavior |

## States

- **With CTA**: Displays banner with button
- **Without CTA**: Displays banner content only (when ctaText is empty)

## Composition

- `BannerTile.Image` - Banner image display
- `BannerTile.Title` - Banner headline
- `BannerTile.Description` - Banner description text
- `BannerTile.CTA` - Call-to-action button