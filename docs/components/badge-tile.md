# Badge Tile

Displays achievement badges with support for latest earned, specific badges, and multiple achievement states.

> ⚠️ **Important**: This component only supports full height tiles (`tileHeight: 'FULL'`). Half-height tiles are not supported.

## Usage

```jsx
import { BadgeTile } from '@wlloyalty/wll-react-sdk'

const tile = {
  type: 'BADGE',
  tileHeight: 'FULL',
  configuration: {
    type: 'SPECIFIC',
    name: 'Top Spender',
    description: 'Spent £100 on 5 Separate transactions',
    artworkUrl: 'https://example.com/badge.png',
    count: 1,
    awardedDatePrefix: 'Awarded',
    badgeNotEarnedMessage: 'Badge not earned yet',
    emptyBadgeMessage: "You haven't earned any badges yet"
  }
}

function MyComponent() {
  return <BadgeTile tile={tile} />
}
```

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| tile | `Tile` | Yes | Badge tile configuration |

## Configuration Object

| Property | Type | Description |
|----------|------|-------------|
| type | 'SPECIFIC' \| 'LATEST_EARNED' | Badge display type |
| name | string | Badge name |
| description | string | Badge description |
| artworkUrl | string | Badge image URL |
| count | number | Times achieved (0 = locked) |
| awardedDatePrefix | string | Text before award date |
| badgeNotEarnedMessage | string | Message for unearned badges |
| emptyBadgeMessage | string | Message when no badges earned |

## States

- **Not Earned**: Shows lock icon (count: 0)
- **Earned Once**: Shows badge with award date
- **Multiple Earned**: Shows badge with count (e.g., "3x")
- **Latest Badge**: Special display for most recent achievement

## Composition

- `BadgeTile.Media` - Badge artwork container
- `BadgeTile.Status` - Lock icon or achievement count
- `BadgeTile.Title` - Badge name or empty state message
- `BadgeTile.Description` - Badge description
- `BadgeTile.DateEarned` - Award date or status message