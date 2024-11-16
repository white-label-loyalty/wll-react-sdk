## Compatibility

This library is compatible with:

- React: ^18.0.0
- React Native: >=0.70.0 <0.73.0

Please ensure your project's React and React Native versions fall within these ranges for optimal compatibility.

## Commit Convention

This repository follows [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages to ensure consistent commits and automated versioning. Each commit message should be structured as follows:

```
type(scope?): subject

[optional body]

[optional footer(s)]
```

### Types
- `feat`: New features (e.g., `feat(auth): add Google OAuth login`)
- `fix`: Bug fixes (e.g., `fix(api): correct rate limiting logic`)
- `hotfix`: Critical bug fixes requiring immediate deployment
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi colons, etc)
- `refactor`: Code changes that neither fix bugs nor add features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Changes to build system or dependencies
- `ci`: Changes to CI configuration
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverting previous changes
- `wip`: Work in progress

### Scope
The scope is optional and represents the section of the codebase the commit modifies (e.g., `auth`, `api`, `ui`).

### Commit Tools
We use several tools to enforce this convention:

- **Commitlint**: Checks if your commit messages meet the conventional commit format
- **Commitizen**: CLI tool to help format commit messages
- **Husky**: Git hooks to enforce commit message format

To make a commit using the interactive commit tool:
```bash
yarn commit
```

### Local Setup
If you're setting up the repository locally, the commit hooks will be installed automatically when you run `yarn install`. However, if you need to reinstall the hooks, you can run:

```bash
yarn prepare
```

This ensures that all commits follow our conventions and maintains a clean, readable git history.