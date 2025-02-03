# Badge Tile

Displays achievement badges with support for latest earned and specific badges.

> ⚠️ **Important**: This component only supports full height tiles (`tileHeight: 'FULL'`). Half-height tiles are not supported.

## Usage

```jsx
import { BadgeTile } from '@wlloyalty/wll-react-sdk'

const tile = {
  type: 'BADGE',
  tileHeight: 'FULL',
  configuration: {
    type: 'SPECIFIC',  // or 'LATEST_EARNED'
    name: 'Top Spender',
    description: 'Spent £100 on 5 Separate transactions',
    artworkUrl: 'https://example.com/badge.png',
    count: 1,
    awardedDatePrefix: 'Awarded',
    badgeNotEarnedMessage: 'Badge not earned yet'  // Optional, controls earned/not earned chip visibility
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

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| type | 'SPECIFIC' \| 'LATEST_EARNED' | Yes | Badge display type. Use 'SPECIFIC' for a particular badge, 'LATEST_EARNED' for most recent achievement |
| name | string | Yes | Badge name |
| description | string | No | Badge description |
| artworkUrl | string | Yes | Badge image URL |
| count | number | Yes | Times achieved (0 = not earned) |
| awardedDatePrefix | string | No | Text before award date |
| badgeNotEarnedMessage | string | No | Message shown in status chip when badge is not earned. If not provided, no chip will be shown for unearned badges |

## Display Types

### SPECIFIC
- Shows a particular badge regardless of earned state
- Always shows description if provided
- Shows earned/not earned chip if badgeNotEarnedMessage is provided

### LATEST_EARNED
- Used to display the most recent achievement
- Hides description when not earned (count = 0)
- Shows earned/not earned chip if badgeNotEarnedMessage is provided

## States

- **Not Earned**: Shows badge with count: 0
  - If `badgeNotEarnedMessage` is provided, shows status chip with that message
  - For LATEST_EARNED type, hides description
- **Earned Once**: Shows badge with award date
- **Multiple Earned**: Shows badge with count (e.g., "3x")

## Composition

- `BadgeTile.Media` - Badge artwork container
- `BadgeTile.Status` - Lock icon or achievement count
- `BadgeTile.Title` - Badge name
- `BadgeTile.Description` - Badge description (hidden for unearned LATEST_EARNED badges)
- `BadgeTile.DateEarned` - Award date or not earned message (if provided)