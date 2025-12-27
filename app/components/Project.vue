<template>
  <a :href="link" class="project-card" target="_blank" rel="noopener noreferrer">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="project-tags">
      <span v-for="(tech, index) in technologies" :key="tech">
        {{ tech }}<span v-if="index < technologies.length - 1"> • </span>
      </span>
    </div>
  </a>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  description: string
  link: string
  technologies: string[]
}>()
</script>

<style scoped>
.project-card {
  text-decoration: none;
  @apply block rounded-xl border-[1px] border-border bg-card p-6 transition-all hover:scale-[1.02] hover:bg-border;
}

.project-card h3 {
  @apply mb-2 font-semibold text-primary;
}

.project-card p {
  @apply mb-4 text-sm text-muted;
}

.project-tags {
  @apply flex gap-4 text-sm text-muted;
}
</style>
