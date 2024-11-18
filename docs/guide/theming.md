# Theming

The SDK includes a powerful theming system that supports custom colors, derived colors, and responsive styling.

## Basic Theme Configuration

```typescript
import { ThemeProvider } from '@wlloyalty/wll-react-sdk'

const customTheme = {
 background: '#F0F0F0',
  text: '#000000',
  primary: '#392ed7',
  accent: '#ff6a3d',
  surface: '#f8f7fc',
  surfaceText: '#000000',
  positive: '#008000',
  negative: '#ff0000',
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

## Base Theme Properties

| Property | Type | Description |
|----------|------|-------------|
| accent | string | Secondary brand color |
| background | string | Page background |
| primary | string | Primary brand color |
| surface | string | Component background |
| surfaceText | string | Text on surface |
| text | string | Default text color |
| negative | string | Negative actions/states |
| positive | string | Positive actions/states |

## Derived Colors

The theme system automatically generates derived colors for various use cases, these are not customisable:

### Contrast Colors
```typescript
type DerivedProperties = {
  accentText: string      // Readable text on accent
  primaryText: string     // Readable text on primary
  positiveText: string    // Readable text on positive
  negativeText: string    // Readable text on negative
}
```

### Color Variations
```typescript
type DerivedColors = {
  [percentage in 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95]: string
}

type ColorVariations = {
  derivedSurfaceText: DerivedColors  // Text opacity variations
  derivedSurface: DerivedColors      // Surface color variations
  alphaDerivedPrimary: DerivedColors // Primary with alpha
  alphaDerivedText: DerivedColors    // Text with alpha
}
```

## Color Utilities

### Contrast Calculation
```typescript
// Automatically selects white or black based on background
const textColor = getReadableTextColor(backgroundColor)
```

### State Colors
```typescript
// Handles inactive/disabled states
const color = getStateColor(baseColor, type, count)
```

### Alpha Variations
```typescript
// Generates alpha variations of a color
const alphaColors = getAlphaDerivedColors(color)
```

## Using Theme in Components

```typescript
function MyComponent() {
  const { theme } = useWllSdk()

  return (
    <View style={{
      backgroundColor: theme.surface,
      borderColor: theme.alphaDerivedPrimary[20]
    }}>
      <Text style={{ color: theme.surfaceText }}>
        Themed Content
      </Text>
    </View>
  )
}
```

## Responsive Sizing

The theme includes predefined sizes for consistent spacing:

```typescript
const sizes = {
  borderRadiusSm: 8,
  borderRadiusLg: 12,
}
```
