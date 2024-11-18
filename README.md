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
- ⚡ **Easy Integration** - Simple setup with customizable configuration for navigation, theming, and API handling

## 📚 Documentation

- [Getting Started Guide](https://wll-react-sdk.vercel.app/guide/getting-started)
- [Component Library](https://wll-react-sdk.vercel.app/components/)
- [Live Storybook Demo](https://66c36701bb14ec551f38279c-ueompbfvfq.chromatic.com/)

## 🚀 Quick Start

```bash
# npm
npm install @wll/react-sdk

# yarn
yarn add @wll/react-sdk
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
| Type | Description |
|------|-------------|
| `feat` | New features (e.g., `feat(auth): add Google OAuth login`) |
| `fix` | Bug fixes (e.g., `fix(api): correct rate limiting logic`) |
| `hotfix` | Critical bug fixes requiring immediate deployment |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, etc) |
| `refactor` | Code changes that neither fix bugs nor add features |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `build` | Changes to build system or dependencies |
| `ci` | Changes to CI configuration |
| `chore` | Other changes that don't modify src or test files |
| `revert` | Reverting previous changes |
| `wip` | Work in progress |

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

## 📄 License

MIT License - See [LICENSE](LICENSE) for more information.

Copyright (c) 2024 WLL

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

## 🆘 Support

- [Documentation](https://wll-react-sdk.vercel.app/)
- [Issues](https://github.com/white-label-loyalty/wll-react-sdk/issues)