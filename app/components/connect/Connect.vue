<template>
  <article>
    <a :href="link" class="contact-card">
      <div class="contact-content">
        <Icon :name="icon" :size="20" class="contact-icon" />
        <h3>{{ label }}</h3>
        <p>{{ description }}</p>
      </div>
    </a>
  </article>
</template>
<script setup lang="ts">
defineProps<{
  link: string
  icon: string
  label: string
  description: string
}>()
</script>

<style scoped>
.contact-card {
  @apply block rounded-xl border-[1px] border-border bg-card p-6 no-underline transition-all duration-200 ease-in-out;
}

.contact-card:not(.static) {
  @apply cursor-pointer;
}

.contact-card:not(.static):hover {
  @apply scale-105 bg-border;
}

.contact-content {
  @apply flex flex-col gap-2;
}

.contact-icon {
  @apply mb-2 text-muted;
}

.contact-content h3 {
  @apply font-semibold text-primary;
}

.contact-content p {
  @apply m-0 text-sm text-muted;
}
</style>
