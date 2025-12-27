<template>
  <article class="connect-card">
    <Icon :name="icon" :size="20" />
    <span>{{ label }}</span>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  label: string
}>()
</script>

<style scoped>
.connect-card {
  @apply flex items-center gap-2.5 rounded-lg border border-border bg-card px-3.5 py-3 text-sm font-medium text-muted transition-all duration-200 ease-in-out;
}
</style>
