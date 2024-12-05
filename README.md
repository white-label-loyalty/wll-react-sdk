# Loyalty Tiles SDK

> A React SDK for building customisable loyalty experiences with configurable tiles, themes, and navigation

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![React Support](https://img.shields.io/badge/React-18.0.0+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![React Native Support](https://img.shields.io/badge/React%20Native-0.70--0.72-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)

## ✨ Features

- 🎨 **Flexible Theming** - Full control over visual styling with automatic color derivation and responsive design system
- 🧩 **Composable Tiles** - Pre-built components for rewards, points, badges, and tiers that work together seamlessly
- 🔌 **Platform Agnostic** - Bring your own navigation and network layer to integrate with any React application
- 📱 **Mobile First** - Responsive components optimized for both mobile and desktop experiences
- 🔒 **Secure by Design** - Built-in support for custom API integration through your own backend proxy
- ⚡ **Easy Integration** - Simple setup with customisable configuration for navigation, theming, and API handling

## 📚 Documentation

- [Getting Started Guide](https://react-sdk.whitelabel-loyalty.com/guide/getting-started)
- [Component Library](https://react-sdk.whitelabel-loyalty.com/components/)
- [Live Storybook Demo](https://66c36701bb14ec551f38279c-ueompbfvfq.chromatic.com/)

## 🚀 Quick Start

```bash
# npm
npm install @wlloyalty/wll-react-sdk

# yarn
yarn add @wlloyalty/wll-react-sdk
```

## 💻 System Requirements

The SDK is compatible with:

- React: ^18.0.0
- React Native: >=0.70.0 <0.73.0

Please ensure your project meets these version requirements for optimal compatibility.

## 🤝 Contributing

We welcome contributions! This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification to ensure consistent commit messages and automated versioning.

### Commit Message Format

```
type(scope?): subject

[optional body]

[optional footer(s)]
```

### Types

| Type       | Description                                               |
| ---------- | --------------------------------------------------------- |
| `feat`     | New features (e.g., `feat(auth): add Google OAuth login`) |
| `fix`      | Bug fixes (e.g., `fix(api): correct rate limiting logic`) |
| `hotfix`   | Critical bug fixes requiring immediate deployment         |
| `docs`     | Documentation changes                                     |
| `style`    | Code style changes (formatting, etc)                      |
| `refactor` | Code changes that neither fix bugs nor add features       |
| `perf`     | Performance improvements                                  |
| `test`     | Adding or updating tests                                  |
| `build`    | Changes to build system or dependencies                   |
| `ci`       | Changes to CI configuration                               |
| `chore`    | Other changes that don't modify src or test files         |
| `revert`   | Reverting previous changes                                |
| `wip`      | Work in progress                                          |

### Automated Release Process

We use automated versioning and release management through GitHub Actions. Here's how it works:

1. **Version Bumping**:
   - When Pull Requests are merged to `main`, our automation will increment the package version
   - The version bump follows semantic versioning based on conventional commit types:
     - `feat:` commits trigger new minor versions
     - `fix:` commits trigger new patch versions
     - Adding `BREAKING CHANGE:` in the commit body triggers major versions

2. **Release Triggering**:
   New releases are automatically created when:
   - A PR title starts with `feat:` or `fix:`
   - A PR has the `release` label
   - A PR title contains `RELEASE`

   Other types of changes (like `docs:`, `style:`, `chore:`) won't trigger releases.

3. **Changelog Generation**:
   - Each release automatically generates an updated CHANGELOG.md
   - The changelog is organized by commit types (Features, Bug Fixes, etc.)
   - Release notes are created from the consolidated changes

4. **NPM Publishing**:
   - New versions are automatically published to NPM
   - The package is always published with public access

### Development Workflow

We use several tools to maintain code quality:

- **Commitlint**: Validates commit message format
- **Commitizen**: Interactive commit message formatter
- **Husky**: Git hooks for enforcing conventions

```bash
# Make a commit using the interactive tool
yarn commit

# Reinstall git hooks if needed
yarn prepare
```

### Creating New Components

We provide an interactive component generator to help maintain consistent structure. To create a new component:

```bash
yarn create-component
```

You'll be prompted for:
1. Component name - The name of your new component
2. Component type - Choose from:
   - atoms: Basic building blocks
   - molecules: Simple combinations of atoms
   - organisms: Complex combinations of molecules
   - particles: Smallest UI elements
   - templates: Page-level components
3. Base directory - Where to create the component (defaults to ./lib/components)

The script will generate a new component with the proper file structure and boilerplate code.

## 📄 License

MIT License - See [LICENSE](LICENSE) for more information.

Copyright (c) 2024 WLL

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## 🆘 Support

- [Documentation](https://react-sdk.whitelabel-loyalty.com/)
- [Issues](https://github.com/white-label-loyalty/wll-react-sdk/issues)
