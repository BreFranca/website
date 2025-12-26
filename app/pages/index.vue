<template>
  <ArticleSection section-id="experience" :title="t('sections.experience')">
    <template v-for="experience in experiences" :key="experience.id">
      <ShortExperience
        :role="experience.role"
        :company="experience.company"
        :company-url="experience.companyUrl"
        :period="experience.period"
      />
    </template>
  </ArticleSection>
</template>

<script setup lang="ts">
import ShortExperience from '~/components/experience/ShortExperience.vue'
import { useI18n } from 'vue-i18n'
import ArticleSection from '~/components/ArticleSection.vue'
const { t, locale } = useI18n()
const { data } = await useFetch('/api/experiences', {
  query: { locale },
  watch: [locale],
})
const experiences = computed(() => data.value?.experiences || [])
</script>
