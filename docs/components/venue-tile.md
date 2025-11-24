# Venue Tile

A compound component that displays venue information with configurable media, title, description, and navigation elements.

> ⚠️ **Important**: This component requires the `WllSdkContext` to be properly set up in the parent tree. The component only supports full-height layouts.

## Usage

```jsx
import { VenueTile } from '@wlloyalty/wll-react-native-sdk';

const tile = {
  type: 'VENUE',
  tileHeight: 'FULL',
  configuration: {
    venueId: '3ae2dabe-6b28-4478-87c2-567363bb8469',
    name: 'The Spicy Lobster House',
    artworkUrl: 'https://example.com/venue.jpg',
    description:
      'Seafood-focused restaurant known for its signature spicy lobster dishes and modern atmosphere.',
  },
};

function MyComponent() {
  return <VenueTile tile={tile} />;
}
```

## Props

| Name | Type   | Required | Description                     |
| ---- | ------ | -------- | ------------------------------- |
| tile | `Tile` | Yes      | Venue tile configuration object |

## Subcomponents

| Component               | Description               |
| ----------------------- | ------------------------- |
| `VenueTile.Media`       | Displays venue image      |
| `VenueTile.Title`       | Shows venue name          |
| `VenueTile.Description` | Renders venue description |
| `VenueTile.Chevron`     | Navigation indicator      |

## Configuration Object

| Property    | Type   | Description                      |
| ----------- | ------ | -------------------------------- |
| venueId     | string | Unique identifier for the venue  |
| name        | string | Venue title                      |
| artworkUrl  | string | Image URL for the venue          |
| description | string | Description text about the venue |

## Styling

The component uses responsive styles with:

- 50% flex basis for image container
- Responsive padding and margins
- Configurable image resize mode
- Responsive text sizes
- Theme-based colors

## States

- **With Media**: Displays image when artworkUrl is provided
- **Without Description**: Hides description when description is missing
- **Without Media**: Hides image when artworkUrl is missing

## Navigation

When the tile is clicked, it navigates to `/venue?id={venueId}` using the venueId from the configuration.

## Example Response Structure

```typescript
{
  tileHeight: 'FULL',
  active: true,
  type: 'VENUE',
  configuration: {
    venueId: '3ae2dabe-6b28-4478-87c2-567363bb8469',
    name: 'The Spicy Lobster House',
    artworkUrl: 'https://ucarecdn.com/e14a2c44-d233-496a-a456-9e7fafbcfde1/',
    description: 'Seafood-focused restaurant known for its signature spicy lobster dishes and modern atmosphere.'
    isLocked: false
  },
  priority: 10
}
```
