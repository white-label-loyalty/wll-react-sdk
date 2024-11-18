# Platform Integration

## Custom Navigation

The SDK provides a flexible navigation system that can be integrated with any routing solution (Next.js, React Router, React Navigation etc.).

```typescript
type NavigationHandlers = {
  internal: ({ target, windowTarget }: {
    target: string;
    windowTarget?: string;
  }) => void;
  external: ({ target, windowTarget }: {
    target: string;
    windowTarget?: string;
  }) => void;
  modal: (action: string) => void;
}

const navigationConfig = {
  navigationHandlers: {
    internal: ({ target }) => {
      // Handle internal routes (/rewards, /profile)
      router.push(target)
    },
    external: ({ target, windowTarget }) => {
      // Handle external links (https://...)
      window.open(target, windowTarget)
    },
    modal: (action) => {
      // Handle modal triggers (#modal-name)
    }
  }
}
```

## React Native Implimentaion

```typescript
import { Linking } from 'react-native';

export const createNavigationConfig = navigation => ({
 navigationHandlers: {
   internal: async ({ target, windowTarget }) => {
     // Strip any leading slash as RN navigation doesn't need it
     const path = target.startsWith('/') ? target.slice(1) : target;

     // Parse query params if any
     const [pathname, queryString] = path.split('?');
     const query = queryString
       ? Object.fromEntries(new URLSearchParams(queryString))
       : {};

     // Navigate using React Navigation
     navigation.navigate(pathname, query);
   },
   external: async ({ target, windowTarget }) => {

     try {
       const supported = await Linking.canOpenURL(target);

       if (supported) {
         await Linking.openURL(target);
       } else {
         console.warn(`Don't know how to open this URL: ${target}`);
       }
     } catch (error) {
       console.error('Error opening external link:', error);
     }
   },
   modal: action => {
     console.log('RN Modal handler:', action);

     switch (action) {
       case "receipt-submit":
         // Handle modal
         navigation.navigate('ReceiptSubmitModal');
         break;
       default:
         console.warn(`Unknown modal action: ${action}`);
     }
   },
 },
});

// Usage example:
const App = () => {
 const navigation = useNavigation();

 return (
   <WllSdkProvider
     config={sdkConfig()}
     navigationConfig={createNavigationConfig(navigation)}
   >
     {/* Your app content */}
   </WllSdkProvider>
 );
};
```

## Custom Network Layer

The SDK allows you to provide your own network implementation to route requests through your own backend/proxy. This is particularly useful for token management and security.

```typescript
type APIResponse<T> = {
  status: 'success' | 'error';
  data: T | null;
  error?: string;
}

type Fetcher = <T>(
  endpoint: string,
  options?: RequestInit
) => Promise<APIResponse<T>>

// Example: Routing requests through your backend
const customFetcher: Fetcher = async (endpoint, options) => {
  try {
    // Instead of calling WLL API directly, route through your backend
    const response = await fetch('/api/wll-proxy', {
      method: 'POST',
      body: JSON.stringify({
        endpoint,
        options
      })
    })

    return await response.json()
  } catch (error) {
    return {
      status: 'error',
      data: null,
      error: error.message
    }
  }
}

// Usage in provider
function App() {
  const config = {
    apiKey: 'your-api-key',
    fetcher: customFetcher
  }

  return (
    <WllSdkProvider config={config}>
      {/* Your app */}
    </WllSdkProvider>
  )
}
```

### Common Use Cases

- Token generation and management on server-side
- Adding additional security layers
- Request/response transformation
- Custom error handling
- API response caching
- Rate limiting

> 📘 **Note**: Using a custom fetcher is recommended for production environments to properly manage sensitive information like API tokens.

## Theming

The SDK's theming system allows deep customisation of visual elements.

```typescript
type BaseThemeObject = {
  accent: string;
  background: string;
  errorPrimary: string;
  negative: string;
  pageButtonBackground: string;
  pageButtonText: string;
  positive: string;
  primary: string;
  surface: string;
  surfaceText: string;
  text: string;
}

// Example theme implementation
const customTheme: Partial<BaseThemeObject> = {
  primary: '#007AFF',
  accent: '#FF9500',
  background: '#FFFFFF',
  surface: '#F2F2F7',
  surfaceText: '#000000',
  text: '#1C1C1E',
  positive: '#34C759',
  negative: '#FF3B30'
}

function App() {
  return (
    <WllSdkProvider
      config={config}
      theme={customTheme}
    >
      {/* Your themed app */}
    </WllSdkProvider>
  )
}
```

### Derived Colors

The theme system automatically generates:
- Contrast colors for text
- Alpha variations
- Color percentages
- Accessibility-focused text colors

```typescript
type DerivedColors = {
  [percentage in 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95]: string;
}

// Automatically generated properties
type DerivedProperties = {
  accentText: string;
  derivedBackground: string;
  primaryText: string;
  positiveText: string;
  negativeText: string;
  derivedSurfaceText: DerivedColors;
  derivedSurface: DerivedColors;
  alphaDerivedPrimary: DerivedColors;
  alphaDerivedText: DerivedColors;
}
```

> 📘 For complete theme customisation options and color utilities, see our [theming guide](/guide/theming).
