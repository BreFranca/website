<template>
  <article class="timeline-item">
    <div class="timeline-header">
      <h3 class="timeline-title">
        {{ role }}<span class="at-text">{{ t('at') }}</span>
        <a :href="companyUrl" target="_blank" rel="noopener noreferrer" class="company-link">
          {{ company }}
        </a>
      </h3>
      <span class="timeline-period"
        >{{ period.start }} - {{ period.end ? period.end : t('present') }}</span
      >
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ExperiencePeriod } from '~/types/experience'

const { t } = useI18n()
defineProps<{
  role: string
  company: string
  companyUrl: string
  period: ExperiencePeriod
}>()
</script>

<style scoped>
.timeline-item {
  @apply border-b border-border py-4;
}

.timeline-item:first-child {
  @apply pt-0;
}

.timeline-item:last-child {
  @apply border-none pb-0;
}

.timeline-header {
  @apply flex flex-wrap items-baseline justify-between gap-4;
}

.timeline-title {
  @apply m-0 text-base font-semibold leading-normal text-primary;
}

.at-text {
  @apply mx-1.5 font-normal text-muted;
}

.company-link {
  @apply border-b font-semibold text-primary no-underline transition-all duration-200 ease-in-out;
  border-color: var(--color-border);
}

.company-link:hover {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.timeline-period {
  @apply text-sm font-normal text-muted;
}
</style>
