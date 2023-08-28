<script setup lang="ts">
interface Props {
  title: string;
  animation?: string;
  code?: boolean;
  variables?: any;
}

withDefaults(defineProps<Props>(), {
  animation: '',
  code: true,
});
</script>

<template>
  <HumbleScroll
    :animation="animation"
    :variables="variables"
  >
    <article class="flex flex-col items-start justify-between px-8 py-8 space-y-20 transition-all duration-300 border rounded-lg bg-slate-800 border-slate-700">
      <h3 class="text-2xl text-center">
        {{ title }}
      </h3>

      <code
        v-if="code"
        class="flex px-4 py-3 font-mono text-sm rounded-md bg-slate-900"
      >
        <slot>
          <span class="flex text-blue-300 whitespace-nowrap">animation</span>
          <span class="flex text-blue-400">=</span>
          <span class="flex text-purple-400">"{{ animation }}"</span>
        </slot>
      </code>
    </article>
  </HumbleScroll>
</template>