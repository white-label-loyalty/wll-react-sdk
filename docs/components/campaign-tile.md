# Campaign Tile

A compound component that displays campaign progress with configurable media, title, description, and a progress bar showing the user's current advancement towards the campaign goal.

> ⚠️ **Important**: This component requires the `WllSdkContext` to be properly set up in the parent tree.

## Usage

```jsx
import { CampaignTile } from '@wlloyalty/wll-react-native-sdk';

const tile = {
  type: 'CAMPAIGN',
  tileHeight: 'FULL',
  active: true,
  configuration: {
    campaignId: '7a59d8a4-0740-46e9-a54e-697470a7a54a',
    type: 'GOAL_BASED',
    status: 'ACTIVE',
    name: 'Summer Coffee Challenge',
    description: 'Complete every step to earn the reward.',
    artworkUrl: 'https://example.com/campaigns/summer-coffee.png',
    progress: {
      currentValue: 1,
      targetValue: 2,
      windowStart: '2026-06-20T09:00:00.000Z',
      windowEnd: '2026-06-27T09:00:00.000Z',
      optedInAt: '2026-06-20T09:00:00.000Z',
      completedAt: null,
      availableAgainAt: null,
      cooldownCycle: null,
    },
    missions: [],
  },
};

function MyComponent() {
  return <CampaignTile tile={tile} />;
}
```

## Props

| Name | Type   | Required | Description                       |
| ---- | ------ | -------- | --------------------------------- |
| tile | `Tile` | Yes      | Campaign tile configuration object |

## Subcomponents

| Component                  | Description                              |
| -------------------------- | ---------------------------------------- |
| `CampaignTile.Media`      | Displays campaign artwork                |
| `CampaignTile.Title`      | Shows campaign name                      |
| `CampaignTile.Description`| Renders campaign description             |
| `CampaignTile.Progress`   | Shows progress bar with current/target   |

## Configuration Object

| Property    | Type               | Description                                  |
| ----------- | ------------------ | -------------------------------------------- |
| campaignId  | string             | Unique campaign identifier                   |
| type        | string             | Campaign type (e.g. `GOAL_BASED`)            |
| status      | string             | Campaign status (e.g. `ACTIVE`, `COMPLETED`) |
| name        | string             | Campaign display name                        |
| description | string             | Campaign description text                    |
| artworkUrl  | string             | Campaign image URL                           |
| effectivity | object             | Start and end dates for the campaign         |
| progress    | CampaignProgress   | User's current progress (see below)          |
| missions    | CampaignMission[]  | List of missions within the campaign         |

## Progress Object

| Property         | Type         | Description                              |
| ---------------- | ------------ | ---------------------------------------- |
| currentValue     | number       | User's current progress value            |
| targetValue      | number       | Target value to complete the campaign    |
| windowStart      | Date \| null | Start of the current progress window     |
| windowEnd        | Date \| null | End of the current progress window       |
| optedInAt        | Date \| null | When the user opted in                   |
| completedAt      | Date \| null | When the campaign was completed          |
| availableAgainAt | Date \| null | When the campaign becomes available again |
| cooldownCycle    | number \| null | Current cooldown cycle number           |

## Progress Bar Behaviour

- When `progress` is provided, a progress bar is displayed alongside a label showing `currentValue / targetValue`
- When `progress` is `null`, the progress bar is hidden completely
- The progress bar percentage is calculated as `(currentValue / targetValue) * 100`

## States

- **With Progress**: Displays progress bar and label when progress data is available
- **Without Progress**: Hides progress bar when progress is null
- **With Media**: Displays artwork when artworkUrl is provided
- **Without Media**: Hides media section when artworkUrl is empty
- **Without Description**: Hides description when not provided

## Example Response Structure

```typescript
{
  tileHeight: 'FULL',
  active: true,
  type: 'CAMPAIGN',
  configuration: {
    campaignId: '7a59d8a4-0740-46e9-a54e-697470a7a54a',
    type: 'GOAL_BASED',
    status: 'ACTIVE',
    name: 'Summer Coffee Challenge',
    description: 'Complete every step to earn the reward.',
    artworkUrl: 'https://example.com/campaigns/summer-coffee.png',
    effectivity: {
      start: '2026-06-01T00:00:00.000Z',
      end: '2026-08-31T23:59:59.000Z'
    },
    progress: {
      currentValue: 1,
      targetValue: 2,
      windowStart: '2026-06-20T09:00:00.000Z',
      windowEnd: '2026-06-27T09:00:00.000Z',
      optedInAt: '2026-06-20T09:00:00.000Z',
      completedAt: null,
      availableAgainAt: null,
      cooldownCycle: null
    },
    missions: [
      {
        id: '1c0b9a87-1111-4a22-9b33-444455556666',
        name: 'Buy a latte',
        description: 'Purchase any latte.',
        pictureUrl: 'https://example.com/missions/latte.png',
        completionType: 'COUNT',
        targetValue: 1,
        displayStyle: 'CHECKBOX',
        requiresOptIn: false
      }
    ]
  },
  priority: 0
}
```
