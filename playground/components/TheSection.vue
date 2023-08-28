<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  columns?: number;
}>();

let twCols = 'lg:grid-cols-2'

if (props.columns == 3) {
  twCols = 'lg:grid-cols-3'
}
</script>

<template>
  <div class="flex flex-col justify-center py-20">
    <div class="flex flex-col mb-16 space-y-6">
      <HumbleScroll animation="fade up once">
        <h2 class="text-4xl lg:text-5xl">
          {{ title }}
        </h2>
      </HumbleScroll>
      <HumbleScroll animation="fade up once">
        <p class="max-w-xl text-lg text-slate-400">
          {{ description }}
        </p>
      </HumbleScroll>
    </div>

    <div
      class="grid gap-8"
      :class="twCols"
    >
      <slot />
    </div>
  </div>
</template>