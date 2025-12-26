<template>
  <article class="tech-badge">
    <span class="tech-name">{{ expName }}</span>
    <span class="tech-years">{{ expYears }} {{ t('experience.yearsShort') }}</span>
  </article>
</template>

<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  expName: string
  expYears: number
}>()
</script>

<style scoped>
.tech-badge {
  display: flex;
  @apply border-border bg-card items-center justify-between rounded-lg border px-3.5 py-2.5 transition-all duration-200 ease-in-out;
}

.tech-badge:hover {
  background: var(--color-border);
}

.tech-name {
  font-size: 0.85rem;
  color: var(--color-text);
  font-weight: 500;
}

.tech-years {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 600;
}
</style>
