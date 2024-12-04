# Development Guide

This guide covers development workflows and tools available when working on the SDK.

## Component Generator

We provide an interactive component generator to help maintain consistent structure across the SDK. This tool helps ensure that new components follow our architectural patterns and include all necessary boilerplate.

### Usage

```bash
yarn create-component
```

The generator will prompt you for three pieces of information:

1. **Component Name**: The name of your new component in PascalCase (e.g., "UserTile", "TierTile", etc.)

2. **Component Type**: The architectural category of your component:
   - `atoms`: Basic building blocks (e.g., text, buttons, inputs)
   - `molecules`: Simple combinations of atoms
   - `organisms`: Complex combinations of molecules
   - `particles`: Smallest UI elements
   - `templates`: Page-level components

3. **Base Directory**: Where to create the component (defaults to `./lib/components`)

### Generated Structure

The generator will create a new directory for your component with the following structure:

```
ComponentName/
├── index.tsx              # Main component file
├── ComponentName.stories.tsx  # Storybook stories
```

### Best Practices

When using the component generator:

1. Always use PascalCase for component names (e.g., "ButtonGroup" not "button-group" or "buttonGroup")
2. Choose the appropriate component type based on atomic design principles
3. Keep components focused and single-purpose
4. Place shared styles in the theme system rather than component-specific files
