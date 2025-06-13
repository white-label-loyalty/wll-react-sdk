---
title: Data Invalidation & Events
outline: deep
---

# Data Invalidation & Events

The Tiles SDK includes a built-in event system to help you keep the UI in sync after key user actions, like earning points or claiming a reward. You can trigger these updates without manually reloading the entire screen.

## Overview

When data changes, you can notify the SDK using the `useInvalidateData` hook. Internally, the SDK uses a publish–subscribe (pub/sub) system to update any subscribed components (like Tiles).

---

## `useInvalidateData` Hook

The `useInvalidateData` hook exposes three methods to invalidate different types of data:

- `invalidateGroupData()` – refresh all tile groups
- `invalidateSectionData(sectionId?)` – refresh a specific section
- `invalidateTileData(tileId?)` – refresh a specific tile

### Usage

```ts
import { useInvalidateData } from '@wlloyalty/wll-react-sdk';

function MyComponent() {
  const {
    invalidateGroupData,
    invalidateSectionData,
    invalidateTileData
  } = useInvalidateData();

  const handleAction = () => {
    invalidateGroupData(); // refresh all groups
    invalidateSectionData('section-id'); // refresh one section
    invalidateTileData('tile-id'); // refresh one tile
  };
}
```

### Full Hook Implementation

```typescript
import { useWllSdk } from "@wlloyalty/wll-react-sdk";

/**
 * Hook to invalidate SDK data
 * @returns Methods to trigger SDK data updates
 */
export function useInvalidateData() {
  const sdk = useWllSdk();

  return {
    invalidateGroupData: () => {
      if (sdk) {
        sdk.notifyDataChange('GROUP_DATA_CHANGED');
      }
    },
    invalidateSectionData: (sectionId?: string) => {
      if (sdk) {
        sdk.notifyDataChange('SECTION_DATA_CHANGED', { sectionId });
      }
    },
    invalidateTileData: (tileId?: string) => {
      if (sdk) {
        sdk.notifyDataChange('TILE_DATA_CHANGED', { tileId });
      }
    }
  };
}
```

## How It Works: Pub/Sub System

The SDK uses a lightweight event system internally. When a data change is triggered:

1. An event like `TILE_DATA_CHANGED` is published.
2. Any subscribed components (like the Tiles SDK) react automatically and update the UI.

This decouples data logic from UI logic and improves modularity.

## Example Flow

```typescript
await claimReward('abc123');
invalidateGroupData(); // Triggers tile refresh in subscribed components
