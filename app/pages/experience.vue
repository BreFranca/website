<template>
  <ArticleSection section-id="experiences" :title="t('sections.experience')">
    <section class="space-y-8">
      <Experience
        v-for="experience in experiences"
        :key="experience.id"
        :role="experience.role"
        :period="experience.period"
        :company="experience.company"
        :description="experience.description"
        :company-url="experience.companyUrl"
      />
    </section>
  </ArticleSection>
</template>

<script setup lang="ts">
import Experience from '~/components/experience/Experience.vue'
import type { ApiExperiencesResponse } from '~/types/experience'

const { t } = useI18n()

const { data } = await useFetch<ApiExperiencesResponse>('/api/experiences')
const experiences = computed(() => data.value?.experiences || [])
</script>
