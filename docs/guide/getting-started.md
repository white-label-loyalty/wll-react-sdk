# Getting Started

## Installation

```bash
npm install @wlloyalty/wll-react-sdk
# or
yarn add @wlloyalty/wll-react-sdk
```

## Basic Setup

The SDK requires a provider component to be wrapped around your application:

```jsx
import { WllSdkProvider } from '@wlloyalty/wll-react-sdk'

function App() {
  const sdkConfig = {
    apiKey: 'your-api-key',     // Required
    userToken: 'user-token',    // Optional
    locale: 'en',               // Optional
    fetcher: customFetcher      // Optional
  }

  return (
    <WllSdkProvider config={sdkConfig}>
      {/* Your app content */}
    </WllSdkProvider>
  )
}
```

## Configuration Options

```typescript
type SDKConfig = {
  apiKey: string;              // Required: Your API key
  userToken?: string;          // Optional: User authentication token
  fetcher?: Fetcher;          // Optional: Custom API fetcher
  locale?: string;            // Optional: Localization setting
}
```

## Using the SDK Hook

Access SDK functionality throughout your app:

```jsx
import { useWllSdk } from '@wlloyalty/wll-react-sdk'

function MyComponent() {
  const {
    getGroupByID,
    getSectionByID,
    getTileByID,
    handleNavigation,
    theme
  } = useWllSdk()

  // Use SDK functions
}
```

## customisation Options

### Custom Theme

```jsx
const customTheme = {
  primary: '#007AFF',
  accent: '#FF9500',
  background: '#FFFFFF',
  surface: '#F2F2F7',
  text: '#000000'
}

function App() {
  return (
    <WllSdkProvider
      config={sdkConfig}
      theme={customTheme}
    >
      {/* Your themed components */}
    </WllSdkProvider>
  )
}
```

> 📘 For complete theme options, see our [theming guide](/guide/theming)


### Custom Navigation

The SDK supports three types of navigation: internal routes, external URLs, and modal triggers.

```jsx
const navigationConfig = {
  navigationHandlers: {
    // Internal navigation (e.g., "/rewards", "/profile")
    internal: ({ target }) => {
      // Your internal routing logic
      router.push(target)
    },

    // External navigation (e.g., "https://example.com")
    external: ({ target, windowTarget }) => {
      // Your external link handling
      window.open(target, windowTarget)
    },

    // Modal triggers (e.g., "#receipt-modal")
    modal: (action) => {
      // Your modal handling logic
      switch(action) {
        case 'receipt-submit':
          openReceiptModal()
          break
      }
    }
  }
}

function App() {
  return (
    <WllSdkProvider
      config={sdkConfig}
      navigationConfig={navigationConfig}
    >
      {/* Your components */}
    </WllSdkProvider>
  )
}
```

Links in components will be automatically handled based on their format:
- Internal: Starts with `/` (e.g., "/rewards")
- External: Includes protocol (e.g., "https://example.com")
- Modal: Starts with `#` (e.g., "#receipt-modal")

### Custom API Fetcher

```typescript
type Fetcher = <T>(
  endpoint: string,
  options?: RequestInit
) => Promise<APIResponse<T>>

const customFetcher: Fetcher = async (endpoint, options) => {
  // Your custom fetch implementation
  return {
    status: 'success',
    data: await response.json()
  }
}

function App() {
  const config = {
    apiKey: 'your-api-key',
    fetcher: customFetcher
  }

  return (
    <WllSdkProvider config={config}>
      {/* Your components */}
    </WllSdkProvider>
  )
}
```

## Next Steps

1. Explore our [component library](/components)
2. Learn about [theming](/guide/theming)
3. [Platfrom Integration](/platform-integration)
