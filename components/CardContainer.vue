<script setup lang="ts">
defineProps({
  isDefaultContainer: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="[
      'relative rounded-xl w-full h-full overflow-auto bg-primary dark:bg-primary-dark',
    ]"
  >
    <div
      v-if="$slots.topCorner"
      :class="[
        'top-0 left-0 bg-default rounded-br-2.5xl card-tl-corner dark:text-white',
        isDefaultContainer
          ? 'fixed z-50 px-6.5 pb-6 pt-7 before:top-3! after:left-3!'
          : 'py-2 px-4 absolute',
      ]"
    >
      <slot name="topCorner" />
    </div>
    <slot />
    <div
      v-if="$slots.bottomCorner"
      class="py-2 px-4 absolute bottom-0 right-0 bg-default rounded-tl-2.5xl card-br-corner dark:text-white"
    >
      <slot name="bottomCorner" />
    </div>
  </div>
</template>

<style>
@reference "../assets/css/main.css";

.card-tl-corner {
  @apply before:content-[''] before:h-8 before:w-8 before:absolute! before:rounded-ss-2.5xl before:top-0 before:-right-8 before:shadow-[-6px_-10px_0_6px_#ffffff] dark:before:shadow-[-5px_-10px_0_0px_#0e1011] after:content-[''] after:h-8 after:w-8 after:absolute after:rounded-ss-2.5xl after:-bottom-8 after:left-0 after:shadow-[-5px_-10px_0_0px_#ffffff] dark:after:shadow-[-5px_-10px_0_0px_#0e1011];
}

.card-br-corner {
  @apply before:content-[''] before:h-8 before:w-8 before:absolute before:rounded-ee-2.5xl before:-top-8 before:right-0 before:shadow-[5px_10px_0_0px_#ffffff] dark:before:shadow-[5px_10px_0_0px_#0e1011] after:content-[''] after:h-8 after:w-8 after:absolute after:rounded-ee-2.5xl after:bottom-0 after:-left-8 after:shadow-[5px_10px_0_0px_#ffffff] dark:after:shadow-[5px_10px_0_0px_#0e1011];
}
</style>
