<template>
  <article>
    <div class="timeline-content">
      <div class="timeline-header">
        <h3>{{ role }}</h3>
        <span class="timeline-period">{{ period }}</span>
      </div>
      <p class="company">{{ company }}</p>
      <p class="description">{{ description }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  role: string
  company: string
  companyUrl: string
  period: string
  description: string
}>()
</script>
