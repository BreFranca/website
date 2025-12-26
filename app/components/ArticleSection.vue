<template>
  <section class="pb-10 pt-12" :id="sectionId">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  sectionId: string
}>()
</script>

<style scoped>
section {
  @apply mb-6;
}
.section-title {
  @apply text-primary mb-6 text-sm font-bold uppercase;
}
</style>
