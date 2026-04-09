<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen font-[DM_Sans] bg-default p-3">
    <Navbar />
    <slot />
  </div>
</template>

<style>
@reference "../assets/css/main.css";

.bg-default,
body {
  @apply bg-white dark:bg-dark;
}
</style>
