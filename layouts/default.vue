<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen font-[DM_Sans]">
    <card-container is-default-container>
      <template #topCorner> <Navbar /> </template>
      <template #default> <slot /></template>
    </card-container>
  </div>
</template>

<style>
@reference "../assets/css/main.css";

.bg-default {
  @apply bg-white dark:bg-dark;
}
</style>
