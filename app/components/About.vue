<template>
  <section class="pb-10 pt-12">
    <div class="container flex flex-col gap-6">
      <div class="flex">
        <h1 class="text-2xl font-bold">Breno Franca</h1>
      </div>
      <div class="flex flex-col gap-4 text-muted">
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const paragraphs = computed(() => {
  const description = t('about.description')
  return description.split('\n\n').filter(p => p.trim())
})
</script>
