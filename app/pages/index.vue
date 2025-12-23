<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="mb-2 text-4xl font-bold">{{ t('home.title') }}</h1>
      <p class="text-xl text-gray-600">{{ t('home.subtitle') }}</p>
    </div>

    <section class="hero mb-8">
      <h2 class="mb-4 text-3xl font-bold">{{ t('home.hero.greeting') }}</h2>
      <p class="text-lg">{{ t('home.hero.description') }}</p>
    </section>
  </div>
</template>
