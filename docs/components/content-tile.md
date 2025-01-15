# Content Tile

A compound component for displaying content with flexible layouts supporting image, text, and call-to-action elements in both full and half-height configurations.

> ⚠️ **Important**: This component extends BaseTile functionality and supports responsive layouts for various screen sizes. It provides flexible height options and automatic content arrangement.

## Usage

```jsx
import { ContentTile } from '@wlloyalty/wll-react-native-sdk'

const tile = {
  type: 'CONTENT',
  tileHeight: 'FULL',
  configuration: {
    title: 'Welcome Back!',
    body: 'Check out our latest offerings',
    artworkUrl: 'https://example.com/image.jpg',
    ctaLink: 'https://example.com',
    ctaLinkTarget: 'SAME_FRAME'
  }
}

function MyComponent() {
  return <ContentTile tile={tile} />
}
```

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tile | `Tile` | Yes | Content tile configuration object |

## Composition

| Component | Description |
|-----------|-------------|
| `ContentTile.Root` | Container wrapper |
| `ContentTile.Media` | Image display component |
| `ContentTile.Content` | Content wrapper with padding |
| `ContentTile.Header` | Title and navigation elements |
| `ContentTile.Body` | Body text content |

## Configuration Object

| Property | Type | Description |
|----------|------|-------------|
| title | string | Header text |
| body | string | Main content text |
| artworkUrl | string | Image URL |
| ctaLink | string | Action link URL |
| ctaLinkTarget | 'SAME_FRAME' \| 'NEW_WINDOW' | Link behavior |

## Layout Variations

### Full Height Tile (`tileHeight: 'FULL'`)
- 1:1 aspect ratio
- Can display image and text together
- Flexible content arrangement

### Half Height Tile (`tileHeight: 'HALF'`)
- 2:1 aspect ratio
- Image-only or text-only display
- Centered content alignment

### Text Truncation
- When only title is present: Title text will fill available space
- When only body is present: Body text will fill available space
- When both title and body are present: Title uses 2 lines, body fills remaining space
- Text behavior adapts to tile size and image presence

## States

1. **Full Size with Image and Text**
   - Image takes 50% of space
   - Text content below
   - Optional CTA

2. **Full Size Image Only**
   - Image fills entire tile
   - No text content

3. **Full/Half Size Text Only**
   - Centered text content
   - Optional CTA
   - Responsive padding

4. **Half Size Image Only**
   - Image fills entire tile
   - No text overlay

## Accessibility

- Proper role assignments
- Image alt text support
- CTA link labels
- Screen reader optimisations

## Example Configurations

```typescript
// Full size with image and text
{
  tileHeight: 'FULL',
  configuration: {
    title: 'Welcome Nick!',
    body: 'Lorem ipsum dolor sit amet',
    artworkUrl: 'https://example.com/image.jpg',
    ctaLink: 'https://example.com',
    ctaLinkTarget: 'SAME_FRAME'
  }
}

// Half size image only
{
  tileHeight: 'HALF',
  configuration: {
    artworkUrl: 'https://example.com/image.jpg'
  }
}