<script setup lang="ts">
import { menu } from "~/constants";
import ThemeSwitch from "./ThemeSwitch.vue";
</script>

<template>
  <div class="fixed z-50 flex justify-between">
    <nav
      class="w-fit dark:text-white z-50 px-3.5 pb-3 pt-4 card-tl-corner bg-default rounded-br-2.5xl"
    >
      <div class="flex gap-5 items-center">
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
  </div>
</template>

<style scoped></style>
