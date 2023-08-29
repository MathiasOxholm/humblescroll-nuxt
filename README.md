# HumbleScroll Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

HumbleScroll is a lightweight and minimalistic animation on scroll Nuxt module. It's easy to use and has no dependencies. The library is based on Intersection Observer combined with CSS Custom Props for easy customization.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/humblescroll-nuxt?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Includes

- Vue plugin (Nuxt module)
- TailwindCSS plugin
- HumbleScroll component

## Features

- CSS animations
- Customize with CSS variables
- TailwindCSS utility classes
- Uses the Intersection Observer API

## Quick Setup

### 1. Add `humblescroll-nuxt` dependency to your project

```bash
# Using pnpm
pnpm add humblescroll-nuxt

# Using yarn
yarn add humblescroll-nuxt

# Using npm
npm install humblescroll-nuxt
```

### 2. Add `humblescroll-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'humblescroll-nuxt'
  ]
})
```

### 3. Install the TailwindCSS plugin

Import the TailwindCSS plugin in your `tailwind.config.js` file.

```js
// tailwind.config.js

import { humbleScrollTailwindPlugin } from 'humblescroll-vue'

export default {
  content: [],
  theme: {},
  plugins: [
    humbleScrollTailwindPlugin
  ]
}
```

### 4. Use the HumbleScroll component

Use the HumbleScroll component in your Vue components.

```html
<template>
  <HumbleScroll animation="fade up">
    <h1 class="text-4xl font-bold">HumbleScroll</h1>
  </HumbleScroll>
</template>
```

## Customization

### CSS variables

Adjust global animation settings in your stylesheet

```css
:root {
  --hs-duration: 800ms;
  --hs-delay: 100ms;
  --hs-translate-x-amount: 10rem;
  --hs-translate-y-amount: 8rem;
  --hs-rotate: -5deg;
  --hs-easing: cubic-bezier(0.17, 0.67, 0.83, 0.67);
}
```

All Custom properties that can be customized. The default values are shown below.

```css
:root {
  --hs-delay: 0ms;
  --hs-easing: var(--hs-ease-out);
  --hs-duration: 600ms;
  --hs-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --hs-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --hs-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --hs-ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
  --hs-opacity: 1;
  --hs-translate-y: 0;
  --hs-translate-x: 0;
  --hs-scale: 1;
  --hs-rotate: 0deg;
  --hs-perspective: 0;
  --hs-rotate-x: 0deg;
  --hs-rotate-y: 0deg;
  --hs-skew-x: 0deg;
  --hs-skew-y: 0deg;
  --hs-translate-ratio: 1;
  --hs-scale-ratio: 0.2;
  --hs-duration-ratio: 1;
  --hs-translate-x-amount: 2rem;
  --hs-translate-y-amount: 3rem;
  --hs-flip-x-amount: 100deg;
  --hs-flip-y-amount: -100deg;
  --hs-perspective-amount: 2000px;
  --hs-stagger-amount: 100ms;
  --hs-skew-amount: 20deg;
  --hs-reveal-amount: 100%;
  --hs-blur: 0;
  --hs-blur-amount: 8px;
}
```

#### Responsive values in CSS

```css
:root {
  --hs-duration: 0.4s;
  --hs-easing: ease-in-out;
  --hs-translate-x-amount: 2.5rem;
}

@media (min-width: 768px) {
  :root {
    --hs-duration: 0.6s;
    --hs-easing: ease-in;
    --hs-translate-x-amount: 4rem;
  }
}
```

## Plugin options

### Options overview

```js
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    'humblescroll-nuxt'
  ],
  humbleScroll: {
    repeat: true,
    mirror: true,
    offset: {
      bottom: -100, // 100px away from bottom of the screen
      top: 0,
      left: 0,
      right: 0
    }
  }
})
```

| Option           | Type      | Default                                    | Description                                                                 |
| ---------------- | --------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| `root`           | `string`  | `null`                                     | Root container to observe                                                   |
| `repeat`         | `boolean` | `false`                                    | Repeat the animation when scrolling from top                                |
| `mirror`         | `boolean` | `false`                                    | Mirror the animation on leave                                               |
| `threshold`      | `number`  | `0.1`                                      | Intersection threshold where 0.1 is 10% of the element                      |
| `offset`         | `Offset`  | `{top: 0, right: 0, bottom: -40, left: 0}` | Intersection offset. Use negative numbers to make the observed area smaller |

## Animations

### 1. Fade animation

Fades in the element.

```html
<HumbleScroll animation="fade" />
```

### 2. Directional

Customize by overriding `--hs-translate-y-amount` or `--hs-translate-x-amount` in your css or directly on the element with the variables prop. Works like a slide without `fade` applied.

```html
<HumbleScroll animation="up" />
<HumbleScroll animation="down" />
<HumbleScroll animation="left" :variables="{ 'translate-x-amount': '42px' }" />
<HumbleScroll animation="right" :variables="{ 'translate-y-amount': '20rem' }" />
```

### 3. Zoom

Customize by overriding `--hs-scale-ratio` in your css or directly on the element as inline-style.

```html
<HumbleScroll animation="zoom-in" />
<HumbleScroll animation="zoom-out" :variables="{ 'scale-ratio': 0.6 }" />
```

### 4. Flip

Flip in any direction. Customize by overriding `--hs-flip-x-amount` and `--hs-flip-y-amount`.

```html
<HumbleScroll animation="flip-up" />
<HumbleScroll animation="flip-down" />
<HumbleScroll animation="flip-left" :variables="{ 'flip-x-amount': '180deg' }" />
<HumbleScroll animation="flip-right" :variables="{ 'flip-y-amount': '-180deg' }" />
```

### 5. Skew

Combine with blur to make them feel blazingly fast. Customize by overriding `--hs-skew-amount`.

```html
<HumbleScroll animation="skew-up" />
<HumbleScroll animation="skew-down" />
<HumbleScroll animation="skew-left" />
<HumbleScroll animation="skew-right" :variables="{ 'skew-amount': '30deg' }" />
```

### 6. Reveal

Parent has overflow hidden and child slides from 100% to 0. Cusomize by overriding `--hs-reveal-amount`.

```html
<HumbleScroll animation="reveal-up" />
<HumbleScroll animation="reveal-down" />
<HumbleScroll animation="reveal-left" />
<HumbleScroll animation="reveal-right" :variables="{ 'reveal-amount': '50%' }" />
```

### 7. Blur

Who doesn't like motion blur? Customize by overriding `--hs-blur` on an element.

```html
<HumbleScroll animation="blur" />
<HumbleScroll animation="blur" :variables="{ 'blur-amount': '40px' }" />
```

### 8. Easings

Customize by overriding `--hs-ease`, `--hs-ease-in`, `--hs-ease-out` or `--hs-ease-out-back` or just create your own.

```html
<HumbleScroll animation="fade up" easing="ease-in" />
<HumbleScroll animation="fade up" easing="ease-out" />
<HumbleScroll animation="fade up" easing="ease-in-out" />
<HumbleScroll animation="fade up" easing="ease-out-back" />
```

### 9. Size variations

Default variation for the translation amount on directional animations (up, down, left, right).
Customize by overriding `--hs-translate-ratio`.

```html
<HumbleScroll animation="fade up" size="small" />
<HumbleScroll animation="fade up" size="medium" />
<HumbleScroll animation="fade up" /> <!-- default -->
<HumbleScroll animation="fade up" size="large" />
<HumbleScroll animation="fade up" size="extra-large" />
```

### 10. Speed variations

Default variation for animation durations (scales from `--hs-duration`).

```html
<HumbleScroll animation="fade up" speed="slow" />
<HumbleScroll animation="fade up" speed="medium" />
<HumbleScroll animation="fade up" /> <!-- default -->
<HumbleScroll animation="fade up" speed="fast" />
<HumbleScroll animation="fade up" speed="extra-fast" />
```

### 11. Run once

Ensure the animation only runs once - even with `repeat` and `mirror` enabled.

```html
<HumbleScroll animation="fade up once" />
```

### 12. Responsive animations

In this responsive age developers need the ability to animate differently based on screen sizes. Use the tailwind prefix before animations to apply a media query.

```html
<HumbleScroll animation="sm:fade lg:up" />
<HumbleScroll animation="md:fade xl:down" />
<HumbleScroll animation="lg:fade sm:left" />
<HumbleScroll animation="xl:fade md:right" />
```

### 13. Combine them

Combine animations inside the `animation` prop (space seperated).
  
  ```html
  <HumbleScroll animation="fade up" speed="slow" />
  <HumbleScroll animation="fade up zoom-in" size="large" />
  <HumbleScroll animation="fade right flip-left blur" />
  <HumbleScroll animation="skew-right fade right blur" speed="fast" easing="ease-out-back" />
  ```

## Vue state

Use the `v-slot` directive to access the `isIntersecting` state.

```html  
<HumbleScroll v-slot="{ isIntersecting }">
  <div 
    class="flex flex-col items-start justify-between px-8 py-8 transition-all duration-300 rounded-lg"
    :class="[isIntersecting ? 'bg-green-500 text-slate-800' : 'text-white bg-slate-800']"  
  >
    <p class="text-2xl">{{ isIntersecting ? 'Intersecting' : 'Not intersecting' }}</p>
  </div>
</HumbleScroll>
```

Use the `@intersecting` event to access the `isIntersecting` state.

```html
<HumbleScroll @intersecting="alert('Hello World')">
  <p>Run your functionality when in screen</p>
</HumbleScroll>
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
