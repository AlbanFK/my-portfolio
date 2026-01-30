<script setup lang="ts">
import { menu } from "~/constants";
import ThemeSwitch from "./ThemeSwitch.vue";
</script>

<template>
  <nav class="dark:text-white">
    <div class="w-fit flex gap-5 items-center">
      <nuxt-link to="/" id="logo">alban foko</nuxt-link>
      <ul class="flex gap-5">
        <template v-for="item in menu" :key="`menu-${item.name}`">
          <li v-if="!item.hide" class="capitalize">
            <nuxt-link :to="{ name: item.to }">{{ item.name }}</nuxt-link>
          </li>
        </template>
      </ul>
      <theme-switch />
    </div>
  </nav>
</template>

<style scoped></style>
