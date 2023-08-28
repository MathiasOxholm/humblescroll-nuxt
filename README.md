# HumbleScroll Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

HumbleScroll is a lightweight and minimalistic animation on scroll Nuxt module. It's easy to use and has no dependencies. The library is based on Intersection Observer combined with CSS Custom Props for easy customization.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/humblescroll-nuxt?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Add `humblescroll-nuxt` dependency to your project

```bash
# Using pnpm
pnpm add humblescroll-nuxt

# Using yarn
yarn add humblescroll-nuxt

# Using npm
npm install humblescroll-nuxt
```

2. Add `humblescroll-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'humblescroll-nuxt'
  ]
})
```

That's it! You can now use HumbleScroll Nuxt in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/humblescroll-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/humblescroll-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/humblescroll-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/humblescroll-nuxt

[license-src]: https://img.shields.io/npm/l/humblescroll-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/humblescroll-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
