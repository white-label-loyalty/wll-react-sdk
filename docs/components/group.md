# Group Component

Renders a collection of sections retrieved from a group ID, displaying them in order of priority.

> ⚠️ **Important**: This component requires the `WllSdkContext` to be properly set up in the parent tree for accessing the SDK functionality.

## Usage

```jsx
import { Group } from '@wlloyalty/wll-react-native-sdk'

function MyComponent() {
  return <Group id="32697712-8dc0-4717-9775-e1f3502acc48" />
}
```

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Unique identifier for the group to fetch and display |

## States

- **Loading**: Shows activity indicator while fetching group data
- **Error**: Displays error message when no group data is available
- **Loaded**: Renders sections in priority order

## Composition

The Group component orchestrates the following:

- `ActivityIndicator` - Loading state indication
- `Text` - Error state message
- `Section` - Individual section rendering
- `View` - Container for sections

## Data Flow

1. Fetches group data using `getGroupByID` from WllSdk context
2. Sorts sections by priority (higher numbers first)
3. Maintains original order for sections with equal priority
4. Renders each section using the `<Section />` component

## Example Response Structure

```typescript
{
  name: "Demo Group",
  active: true,
  id: "32697712-8dc0-4717-9775-e1f3502acc48",
  sections: [
    {
      name: "Loyalty Tiles",
      type: "GRID",
      active: true,
      priority: 5,
      tiles: [...],
    },
  ],
}
```

## States

- **Loading**: `<ActivityIndicator size="large" />`
- **No Data**: `<Text>No group data available</Text>`
- **Loaded**: Renders sorted sections