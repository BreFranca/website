<template>
  <section :id="sectionId" class="pb-10 pt-12">
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
  @apply mb-6 text-sm font-bold uppercase text-primary;
}
</style>
