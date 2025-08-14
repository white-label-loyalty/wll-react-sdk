# WllSdkProvider

The `WllSdkProvider` is the root component of the Loyalty Tiles SDK. It initialises the SDK configuration, manages theming, and provides essential context to all child components.

## Overview

The `WllSdkProvider` serves several crucial functions:
- Manages SDK configuration and authentication
- Provides theming context for consistent styling
- Handles navigation between loyalty components
- Manages API communication for loyalty data

## Installation

```bash
npm install @wlloyalty/wll-react-sdk
# or
yarn add @wlloyalty/wll-react-sdk
```

## Basic Usage

```jsx
import { WllSdkProvider } from '@wlloyalty/wll-react-sdk'

function App() {
  const config = {
    apiKey: 'your-api-key',
    userToken: 'optional-user-token',
    environment: 'PRODUCTION' // 'PRODUCTION', 'STAGING', 'PRODUCTION-US', 'STAGING-US' or 'DEVELOPMENT'
  }

  return (
    <WllSdkProvider config={config}>
      {/* Your loyalty components */}
    </WllSdkProvider>
  )
}
```

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| config | `SDKConfig` | Yes | SDK configuration object |
| theme | `Partial<BaseThemeObject>` | No | Custom theme configuration |
| navigationConfig | `NavigationConfig` | No | Navigation handling configuration |
| children | `React.ReactNode` | Yes | Child components |

## Configuration

### SDKConfig

```typescript
export enum CoreApiUrl {
  PRODUCTION_EU = 'https://api.core.wlloyalty.net/v1',
  PRODUCTION_US = 'https://api.core.us.wlloyalty.net/v1',
  STAGING_EU = 'https://api.staging.core.wlloyalty.net/v1',
  STAGING_US = 'https://api.staging.core.us.wlloyalty.net/v1',
  DEVELOPMENT = 'https://localhost:8080/v1',
}

export type AllowedCoreApiUrl = `${CoreApiUrl}`;

type SDKConfig = {
  apiKey: string;
  userToken?: string;
  fetcher?: Fetcher;
  locale?: string;
  coreApiUrl: AllowedCoreApiUrl;
};
```

#### API URL Configuration

The `coreApiUrl` property must be explicitly set to one of the known Core API endpoints.

### Theme Configuration

```typescript
type BaseThemeObject = {
  background: string;
  primary: string;
  accent: string;
  positive: string;
  negative: string;
  surfaceText: string;
  surface: string;
  text: string;
};
```

### Navigation Configuration

```typescript
type NavigationConfig = {
  onNavigate?: (link: string, target: CTALinkTarget) => void;
};
```

## Hooks

### useWllSdk

Access the SDK context from any child component:

```jsx
import { useWllSdk } from '@wlloyalty/wll-react-sdk'

function MyComponent() {
  const {
    theme,
    setTheme,
    getGroupByID,
    getSectionByID,
    getTileByID,
    handleNavigation
  } = useWllSdk();
}
```

## Advanced Usage

### Custom Theme

Check our [complete theming guide](/guide/theming) for more configuration options.

```jsx
import { WllSdkProvider } from '@wlloyalty/wll-react-sdk'

function App() {
  const customTheme = {
    primary: '#FF0000',
    accent: '#00FF00',
    background: '#FFFFFF',
  }

  return (
    <WllSdkProvider
      config={config}
      theme={customTheme}
    >
      {/* Your components */}
    </WllSdkProvider>
  )
}
```

### Custom Navigation

```jsx
import { WllSdkProvider } from '@wlloyalty/wll-react-sdk'

function App() {
  const navigationConfig = {
    onNavigate: (link, target) => {
      if (target === '_blank') {
        window.open(link, '_blank');
      } else {

        history.push(link);
      }
    }
  }

  return (
    <WllSdkProvider
      config={config}
      navigationConfig={navigationConfig}
    >
      {/* Your components */}
    </WllSdkProvider>
  )
}
```

### Custom API Fetching

```jsx
import { WllSdkProvider } from '@wlloyalty/wll-react-sdk'

function App() {
  const customFetcher = async (endpoint, options) => {

    const response = await fetch(endpoint, {
      ...options,
      headers: {
        ...options?.headers,
        'Custom-Header': 'value'
      }
    });
    const data = await response.json();
    return {
      status: response.ok ? 'success' : 'error',
      data: response.ok ? data : null,
      error: response.ok ? undefined : data.error
    };
  };

  return (
    <WllSdkProvider
      config={{
        apiKey: 'your-api-key',
        fetcher: customFetcher
      }}
    >
      {/* Your components */}
    </WllSdkProvider>
  )
}
```

## Best Practices

1. Place the `WllSdkProvider` at the root of your application
2. Configure theming at the provider level for consistent styling
3. Implement proper error handling for API responses
4. Use the provided hooks for accessing SDK functionality
5. Configure navigation handling based on your application's routing needs

## Related Components

- [Group](/components/group)
- [Section](/components/section)