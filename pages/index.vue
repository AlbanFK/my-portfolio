<script setup lang="ts"></script>

<template>
  <div class="md:flex space-y-3 md:space-y-0 gap-3 h-full w-full overflow-auto">
    <CardContainer class="md:sticky md:top-0 basis-1/2">
      <template #bottomCorner>
        <span>hello world</span>
      </template>
    </CardContainer>

    <!-- <div class="bg-red-300"></div> -->
    <div class="bg-green-300 basis-1/2">
      <div class="h-screen w-full">yoooooo</div>
      <div class="h-screen w-full">yoooooo</div>
    </div>
  </div>
</template>

<style scoped></style>
