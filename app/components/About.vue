<template>
  <section class="py-12">
    <div class="container flex flex-col gap-6">
      <div class="flex">
        <h1 class="text-2xl font-bold">Breno Franca</h1>
      </div>
      <p class="text-muted text-sm">{{ t('about.description') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
