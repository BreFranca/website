<template>
  <article class="experience-content">
    <div class="experience-header">
      <h3>{{ role }}</h3>
      <span class="experience-period">{{ period }}</span>
    </div>
    <p class="company">{{ company }}</p>
    <p class="description">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
import type { ExperiencePeriod } from '~/types/experience'

defineProps<{
  role: string
  company: string
  companyUrl: string
  period: ExperiencePeriod
  description: string
}>()
</script>

<style scoped>
.experience-content {
  @apply flex flex-col gap-2 border-b-[1px] border-muted/20 pb-8 last:border-0;
}

.experience-header {
  @apply flex flex-wrap items-baseline justify-between gap-4;
}

.experience-header h3 {
  @apply m-0 text-lg font-semibold text-primary;
}

.experience-period {
  @apply text-sm font-normal text-muted;
}

.company {
  @apply m-0 text-sm font-medium text-muted;
}

.description {
  @apply m-0 text-sm leading-6 text-muted;
}
</style>
