<p align="center">
  <img src=".github/assets/hero-illustration.svg" alt="A developer siting in front of a computer" />
</p>

# Boilerplate: Vite + React

---

This is a [React](https://reactjs.org/) boilerplate using [Vite Builder](https://vitejs.dev/).

## What is inside?

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React-Router](https://reactrouter.com/)
- [TypeScript](https://typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Plop](https://plopjs.com/)

## Getting Started

Make a copy:

```
npx degit adeonir/boilerplate-react-vite my-project
```

Enter the new created folder, initiate a git repository and install the dependencies:

```
cd my-project
git init
yarn install
```

### Development

Run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

### Production

If you like to try the production build, run:

```
yarn build
```

And then:

```
yarn preview
```

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `preview`: starts a simple server with the build production code
- `test`: runs vitest in watch mode
- `test:coverage`: runs vitest returning coverage table
- `test:ci`: runs vitest once in CI
- `lint`: runs the linter in all components and pages
- `format`: runs prettier to format all components and pages
- `typecheck`: runs the type checker in all components and pages
- `storybook`: runs storybook on `localhost:6006`
- `storybook:build`: create the build version of storybook
- `generate`: runs plop to generate component files

---

Made with ♥️ by Adeonir Kohl
