<script setup lang="ts">
import { menu } from "~/constants";
</script>

<template>
  <nav class="px-3.5 pb-3 pt-1 dark:text-white">
    <div class="w-fit flex gap-5">
      <nuxt-link to="/" id="logo">alban foko</nuxt-link>
      <ul class="flex gap-5">
        <template v-for="item in menu" :key="`menu-${item.name}`">
          <li v-if="!item.hide" class="capitalize text-sm">
            <nuxt-link :to="{ name: item.to }">{{ item.name }}</nuxt-link>
          </li>
        </template>
      </ul>
      <div id="theme_switch"><theme-switch /></div>
    </div>
  </nav>
</template>

<style scoped></style>
