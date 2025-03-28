

# Helper Methods
The SDK provides a set of helper methods to enhance your integration. These methods are designed to simplify common tasks and provide a consistent experience across different platforms.


## Refresh Group Data

The SDK provides functionality to refresh group data programmatically. This is useful when you need to update the group's content after certain events or actions.

## Using refreshGroup

Access the `refreshGroup` function through the `useWllSdk` hook:

```jsx
import { useWllSdk } from '@wlloyalty/wll-react-sdk'

function MyComponent() {
  const { refreshGroup } = useWllSdk()

  const handleRefresh = async (groupId) => {
    try {
      const response = await refreshGroup(groupId)
      if (response.status === 'success') {
        console.log('Group data refreshed:', response.data)
      } else {
        console.error('Failed to refresh group:', response.error)
      }
    } catch (error) {
      console.error('Error refreshing group:', error)
    }
  }

  return (
    <button onClick={() => handleRefresh('your-group-id')}>
      Refresh Group
    </button>
  )
}
```

## Common Use Cases

1. **After User Actions**: Refresh group data after a user completes an action that might affect the group's content.

```jsx
function RewardComponent() {
  const { refreshGroup } = useWllSdk()

  const handleRewardClaim = async (rewardId) => {
    // Process reward claim
    await claimReward(rewardId)

    // Refresh the group to show updated content
    await refreshGroup('group-id')
  }

  return <button onClick={() => handleRewardClaim('reward-id')}>Claim Reward</button>
}
```

2. **Periodic Updates**: Set up periodic refreshes for time-sensitive content.

```jsx
function LiveUpdatesComponent() {
  const { refreshGroup } = useWllSdk()
  const groupId = 'your-group-id'

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshGroup(groupId)
    }, 60000) // Refresh every minute

    return () => clearInterval(refreshInterval)
  }, [refreshGroup])

  return <div>Live Updates Content</div>
}
```

## Response Type

The `refreshGroup` function returns a Promise that resolves to an APIResponse:

```typescript
type APIResponse<T> = {
  status: 'success' | 'error';
  data: T | null;
  error?: string;
}
```

Where `T` is the group data type (`TGroup`).