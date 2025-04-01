# Data Invalidation

This document explains how to use the event-driven data invalidation system in the TilesSDK to keep UI data fresh without causing loading states or flickering.

## Overview

The event-driven data invalidation system allows the host application to notify the SDK when data changes occur. This enables the SDK to silently refresh its data in the background without impacting the UX.

## Problem Solved

Without a data invalidation mechanism, when an event occurs in the host application (e.g., applying a promo code), the TilesSDK has no way to know that its data is stale. This leads to inconsistencies between the backend state and what's displayed in the UI.

The data invalidation system solves this problem by providing a way for the host application to signal the SDK when changes occur, triggering a background refresh.

## Key Components

1. **Event Emitter**: A simple pub-sub system that allows components to subscribe to and emit events.
2. **SDK Context Extensions**: Methods to subscribe to and emit events through the SDK context.
3. **Silent Refresh Logic**: Components that listen for events and refresh their data without showing loading states.

## How It Works

1. The host application notifies the SDK when a relevant event occurs (e.g., after applying a promo code or updating user data).
2. Components that have subscribed to these events automatically refresh their data in the background.
3. The UI updates with the new data silently without showing loading indicators.

## Implementation in Host Application

### Basic Usage

```tsx
import { useWllSdk } from '@wll/react-sdk';

function YourHostComponent() {
  const sdk = useWllSdk();

  // Example: After any operation that changes data
  async function handleDataChange() {
    // First, perform your API operation
    await yourApi.performOperation();

    // Then, notify the SDK that data has changed
    sdk.notifyDataChange('GROUP_DATA_CHANGED');
  }

  return (
    <button onClick={handleDataChange}>Update Data</button>
  );
}
```

### Real-World Example

Here's a more complete example showing how to integrate data invalidation in a React component:

```tsx
import React, { useState } from 'react';
import { useWllSdk, Group } from '@wll/react-sdk';

function LoyaltyDashboard() {
  const sdk = useWllSdk();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleApplyPromoCode = async (promoCode) => {
    try {
      setIsUpdating(true);

      // Call your API to apply the promo code
      const result = await yourApi.applyPromoCode(promoCode);

      if (result.success) {
        // Notify the SDK to refresh data silently
        sdk.notifyDataChange('GROUP_DATA_CHANGED');
        showSuccessMessage('Promo code applied successfully!');
      } else {
        showErrorMessage(result.error);
      }
    } catch (error) {
      showErrorMessage('Failed to apply promo code');
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="dashboard">
      <h1>Your Loyalty Dashboard</h1>

      <div className="promo-section">
        <input type="text" placeholder="Enter promo code" id="promoCode" />
        <button
          onClick={() => handleApplyPromoCode(document.getElementById('promoCode').value)}
          disabled={isUpdating}
        >
          Apply Code
        </button>
      </div>

      {/* This Group component will automatically refresh when data changes */}
      <Group id="main-loyalty-group" />
    </div>
  );
}
```

## Available Events

The SDK supports the following event types:

- `GROUP_DATA_CHANGED`: Use this when any data changes that might affect groups
- `SECTION_DATA_CHANGED`: Use this when section data changes
- `TILE_DATA_CHANGED`: Use this when tile data changes

## Best Practices

1. **Trigger events at the right time**: Call `notifyDataChange` after your API operation completes successfully

2. **Handle errors appropriately**: Don't trigger data invalidation if your API call fails

3. **Choose the right event type**: Use the most specific event type that applies to your situation

4. **Avoid excessive notifications**: Only notify when data actually changes

## Benefits

- **No polling required**: Data updates only when necessary
- **Minimal network requests**: Only refresh when data actually changes
- **No UI flickering**: Updates happen without showing loading states
- **Simple implementation**: Easy to integrate with your existing code
- **Clean separation**: Host app and SDK remain loosely coupled
