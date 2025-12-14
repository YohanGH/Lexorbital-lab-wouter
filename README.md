# LexOrbital-Lab Wouter

**Demonstration and Learning Project** — Complete examples of using [Wouter](https://github.com/molefrog/wouter) with React.

This project is part of the **LexOrbital-Lab** ecosystem and serves as a reference for the community on routing patterns with Wouter.

## ⚠️ Project Status

**Maintenance discontinued as of December 2024**

This repository was created as a **test/unblocking exercise** and is now archived. It is left available for anyone who wants to learn from it.

**Repository:** [GitHub - YohanGH/Lexorbital-lab-wouter](https://github.com/YohanGH/Lexorbital-lab-wouter?tab=readme-ov-file)

## 🎯 Objective

Provide practical and complete examples for:

- Understanding Wouter's core concepts
- Learning advanced patterns (nesting, redirects, switches)
- Seeing real-world use cases (dashboards, e-commerce, user accounts)

## 🚀 Technologies

- React 19
- TypeScript
- Vite
- Wouter (routing)
- Tailwind CSS v4

## 📚 Available Examples

### Core Routing Concepts

- **Route Component**: Basic routing with props, render props, and optional parameters
- **Link Component**: Navigation links with active states and custom behaviors
- **Switch Component**: Exclusive routing with fallback handling
- **Redirect Component**: Programmatic navigation and conditional redirects
- **Router Component**: Advanced configuration with base paths and custom hooks

### Business Use Cases

- **Admin Dashboard**: Nested routing for administrative interfaces
- **E-commerce Layout**: Product catalog and shopping cart routing
- **User Account**: Profile and settings management with nested routes

### Version Routing Demo

A concrete example solving the versioning router problem from lexorbital-core, demonstrating how to handle multiple API versions in a single application.

## 🛠️ Development

### Prerequisites

- Node.js >= 20
- pnpm >= 9

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## 📖 React Compiler

The React Compiler is enabled in this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

**Note:** This will impact Vite dev & build performance.

## 🔧 Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## 🌐 Live Demo

Visit the live demo: [yohangh.github.io/Lexorbital-lab-wouter/](https://yohangh.github.io/Lexorbital-lab-wouter/)

## 📝 License

MIT License

## 🙏 Acknowledgments

- [Wouter](https://github.com/molefrog/wouter) - A tiny router for React
- [LexOrbital](https://github.com/YohanGH) - The parent ecosystem

---

**Note:** This project is archived and no longer maintained. Feel free to use it as a learning resource!
