<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-bold mb-2">{{ t('home.title') }}</h1>
      <p class="text-xl text-gray-600">{{ t('home.subtitle') }}</p>
    </div>

    <section class="hero mb-8">
      <h2 class="text-3xl font-bold mb-4">{{ t('home.hero.greeting') }}</h2>
      <p class="text-lg">{{ t('home.hero.description') }}</p>
    </section>
  </div>
</template>
