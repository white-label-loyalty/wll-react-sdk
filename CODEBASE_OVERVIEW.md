# Loyalty Tiles SDK - Codebase Overview

## Project Summary

The **Loyalty Tiles SDK** (`@wlloyalty/wll-react-sdk`) is a React component library designed for building customizable loyalty program interfaces. It provides a comprehensive set of pre-built components (tiles) for displaying rewards, points, badges, and tiers in both React and React Native applications.

## Architecture Overview

### Core Design Principles

1. **Platform Agnostic**: Works with both React web and React Native mobile applications
2. **Composable Components**: Built using atomic design principles (atoms → molecules → organisms)
3. **Flexible Theming**: Comprehensive theming system with automatic color derivation
4. **Secure by Design**: Custom API integration through backend proxy
5. **Mobile First**: Responsive components optimized for mobile experiences

### Project Structure

```
├── lib/                        # Main source code
│   ├── components/             # Component library
│   │   ├── atoms/              # Basic building blocks
│   │   ├── molecules/          # Simple combinations
│   │   └── organisms/          # Complex components
│   ├── context/                # React contexts
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript definitions
│   ├── utils/                  # Utility functions
│   ├── constants/              # Application constants
│   └── mocks/                  # Mock data for testing
├── docs/                       # VitePress documentation
├── native/                     # React Native example app
├── .storybook/                 # Storybook configuration
└── dist/                       # Built output
```

## Core Components & Architecture

### 1. Context System (`lib/context/`)

**WllSdkContext** - Central context provider that manages:

- Theme configuration and dynamic color generation
- API configuration and data fetching
- Navigation handling
- Event emission for data changes
- SDK configuration validation

**ResponsiveContext** - Manages responsive design breakpoints and device detection. The provider was implemented using the approach outlined in this article, enabling a unified abstraction layer across web and native platforms. This design decision minimised the need for platform-specific styling logic and avoids introducing additional dependency packages, ensuring consistency while reducing maintenance overhead.

### 2. Component Hierarchy

#### Atoms (`lib/components/atoms/`)

- **BaseTile**: Foundation component for all tile types
- **Button**: Styled button component with variants
- **Text**: Typography component with theme integration
- **ProgressBar**: Progress visualization component
- **Skeleton**: Loading state component
- **Primitives**: Layout components (Row, Column, Spacer, etc.)

#### Molecules (`lib/components/molecules/`)

- **Carousel**: Horizontal scrolling container for tiles
- **Grid**: Responsive grid layout for tiles
- **SectionHeader**: Section title and description display
- **ProgressIndicator**: Complex progress visualization

#### Organisms (`lib/components/organisms/`)

- **Section**: Main container that renders different section types
- **BadgeTile**: Achievement/badge display component
- **BannerTile**: Promotional banner component
- **ContentTile**: General content display tile
- **PointsTile**: Points balance display
- **RewardTile**: Individual reward display
- **RewardCategoryTile**: Reward category navigation
- **RoundupTile**: Roundup balance display
- **TierTile**: Loyalty tier progress display

### 3. Type System (`lib/types/`)

Comprehensive TypeScript definitions covering:

- **Tile Types**: All tile configurations and enums
- **Theme Types**: Color system and theming interfaces
- **Navigation Types**: Navigation configuration
- **API Types**: Response structures and data models
- **Common Types**: Shared interfaces and utilities

### 4. Theming System (`lib/utils/themeHelpers.ts`)

Advanced theming with:

- **Base Theme Object**: Core color definitions
- **Derived Properties**: Automatically calculated colors and contrasts
- **Color Derivation**: Automatic generation of color variants (5%-95% opacity)
- **Accessibility**: Automatic readable text color calculation
- **Responsive Sizing**: Consistent sizing system across platforms

## Build System & Tooling

### Multi-Platform Build (`rollup.config.js`)

The project uses Rollup to create separate bundles:

- **Native Bundle** (`dist/native.js`): React Native optimized
- **Web Bundle** (`dist/web.js`): Web/React DOM optimized
- **Type Definitions** (`dist/index.d.ts`): Consolidated TypeScript definitions

### Development Tools

1. **Storybook**: Component development and documentation
2. **Jest**: Unit testing with React Testing Library
3. **VitePress**: Documentation site generation
4. **Husky + Commitlint**: Git hooks and conventional commits
5. **Babel**: Multi-platform transpilation
6. **TypeScript**: Type safety and development experience

### Quality Assurance

- **Conventional Commits**: Automated versioning and changelog generation
- **Automated Testing**: Jest with React Testing Library
- **Type Checking**: Strict TypeScript configuration
- **Code Quality**: ESLint and Prettier integration
- **Visual Testing**: Chromatic integration for Storybook

## API Integration Pattern

### Flexible Fetcher System

The SDK uses a "bring your own fetcher and navigation" approach:

- Custom `Fetcher` type for API integration
- Custom `NavigationConfig` for the implementation of bespoke navigation solutions.
- Support for multiple Core API environments (EU/US, staging/production)
- Built-in response standardization (`APIResponse<T>`)
- Automatic error handling and loading states

### Data Flow

1. **Configuration**: SDK initialized with API key and fetcher
2. **Data Fetching**: Components request data through context
3. **Caching**: Responses cached at component level
4. **Updates**: Event system for data invalidation
5. **Navigation**: Configurable navigation handling

## Key Features & Capabilities

### 1. Responsive Design

- Mobile-first approach with responsive breakpoints
- Automatic tile sizing (half/full width)
- Platform-specific optimizations

### 2. Accessibility

- ARIA labels and roles throughout
- Keyboard navigation support
- Screen reader compatibility
- High contrast color calculations

### 3. Internationalization

- Locale-aware formatting
- Configurable text prefixes/suffixes
- Multi-language support structure

### 4. Performance

- Lazy loading patterns
- Efficient re-rendering with React.memo
- Optimized bundle splitting
- Tree-shaking friendly exports

## Testing Strategy

### Unit Testing (`jest.config.js`)

- React Testing Library for component testing
- Jest with jsdom environment
- Snapshot testing for UI consistency
- Mock service worker (MSW) for API mocking

### Visual Testing

- Storybook stories for all components
- Chromatic integration for visual regression testing
- Cross-platform story compatibility

### Integration Testing

- Native app example for React Native testing
- Web documentation site for web testing
- End-to-end component interaction testing

## Documentation & Examples

### 1. VitePress Documentation (`docs/`)

- Getting started guides
- Component API documentation
- Theming guides
- Platform integration examples

### 2. Storybook (`lib/components/**/*.stories.tsx`)

- Interactive component playground
- All component variants and states
- Design system documentation
- Cross-platform compatibility demos

### 3. Example Applications

- React Native example app (`native/`)
- Web documentation site with live examples
- Comprehensive mock data for development

## Development Workflow

### Commit Standards & Automation

The project enforces strict commit message standards using **Conventional Commits** specification:

#### Commitizen Integration

- **Interactive Commits**: Use `yarn commit` for guided commit creation
- **Automatic Validation**: Commitlint validates all commit messages
- **Pre-commit Hooks**: Husky enforces standards before commits are accepted

#### Conventional Commit Types & Automation

```
feat:     New features → triggers MINOR version bump
fix:      Bug fixes → triggers PATCH version bump
hotfix:   Critical fixes → immediate deployment
docs:     Documentation → no version bump
style:    Code formatting → no version bump
refactor: Code restructuring → no version bump
perf:     Performance improvements → no version bump
test:     Test changes → no version bump
build:    Build system changes → no version bump
ci:       CI configuration → no version bump
chore:    Maintenance tasks → no version bump
```

#### Automated Release Triggers

The CI/CD pipeline automatically creates releases when:

- PR title starts with `feat:` or `fix:`
- PR has the `release` label
- PR title contains `RELEASE`
- Manual workflow dispatch is triggered

### Component Creation

- Interactive component generator (`yarn create-component`)
- Consistent file structure and naming
- Automatic story and test file generation
- Type-safe component patterns

### Release Process (Fully Automated)

#### Version Bumping Logic

```yaml
# From .github/workflows/version-bump.yml
if: |
  github.event_name == 'workflow_dispatch' ||
  (github.event.workflow_run.conclusion == 'success' &&
  github.event.workflow_run.head_branch == 'main' && (
    contains(github.event.workflow_run.head_commit.message, 'feat:') ||
    contains(github.event.workflow_run.head_commit.message, 'fix:') ||
    contains(github.event.workflow_run.head_commit.message, 'RELEASE')
  ))
```

#### Automated Steps

1. **Version Calculation**: Based on conventional commit types
2. **Changelog Generation**: Using conventional-changelog-cli
3. **Git Tagging**: Automatic tag creation (v1.x.x format)
4. **GitHub Release**: With generated release notes
5. **NPM Publishing**: Automatic publication with public access

#### Manual Override

```bash
# Trigger manual release with specific version bump
# Available via GitHub Actions workflow_dispatch:
# - patch (default)
# - minor
# - major
```

### Code Quality Pipeline

- **Pre-commit Hooks**: Husky + lint-staged for type checking
- **Automated Testing**: Jest runs on all PRs
- **Visual Testing**: Chromatic integration for Storybook
- **Type Safety**: Strict TypeScript with tsc-files validation
- **Commit Validation**: Commitlint ensures conventional format

## Notable Technical Decisions

### 1. Cross-Platform Strategy

- Single codebase for React and React Native
- Platform-specific bundle optimization
- Shared component logic with platform-specific rendering

### 2. Theming Architecture

- Mathematical color derivation for consistency
- Automatic accessibility compliance
- Runtime theme switching capability

### 3. Component Composition

- Compound component pattern for flexibility
- Context-based data sharing
- Render prop patterns for customization

### 4. Type Safety

- Comprehensive TypeScript coverage
- Runtime validation with Zod
- Strict type checking configuration

## Maintenance Notes

1. **Dependencies**: Regular updates needed for React Native compatibility
2. **Platform Support**: Monitor React Native version compatibility
3. **API Evolution**: Maintain backward compatibility for tile configurations
4. **Performance**: Monitor bundle size as component library grows

---

_This overview was generated to provide context for future maintainers and developers working on the Loyalty Tiles SDK._
