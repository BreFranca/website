<template>
  <span class="skill-tag">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<style scoped>
.skill-tag {
  @apply rounded-md border-[1px] border-border bg-card px-3 py-1 text-sm text-primary transition-all duration-200;
}
</style>
