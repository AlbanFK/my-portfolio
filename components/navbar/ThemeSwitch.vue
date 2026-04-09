<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const toggleActive = ref(false);
const onToggle = () => {
  toggleActive.value = !toggleActive.value;
  toggleDark();
};
</script>

<template>
  <div
    class="w-7.5 h-5 flex items-center bg-primary dark:bg-primary-dark rounded-full p-1.5 transition duration-300 ease-in-out cursor-pointer"
    @click="onToggle"
  >
    <div
      class="bg-dark dark:bg-white w-2 h-2 rounded-full shadow-md transition duration-300 ease-in-out"
      :class="{ 'translate-x-2.5': toggleActive }"
    ></div>
  </div>
</template>

<style scoped></style>
