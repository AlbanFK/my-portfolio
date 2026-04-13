<script setup></script>

<template>
  <div class="md:flex space-y-3 md:space-y-0 gap-3 h-full w-full overflow-auto">
    <div class="h-1/2 md:h-full md:sticky md:top-0 basis-1/2">
      <CardContainer>
        <slot name="heroBody" />
        <template #bottomCorner>
          <slot name="heroBtCorner" />
        </template>
      </CardContainer>
    </div>

    <section class="basis-1/2">
      <slot name="contain" />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
