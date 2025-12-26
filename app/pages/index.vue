<template>
  <div>
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

    <ArticleSection section-id="tech-stack" :title="t('sections.techStack')">
      <div class="tech-stack-grid">
        <TechStack
          v-for="tech in stacks"
          :key="tech.name"
          :exp-name="tech.name"
          :exp-years="tech.experience"
        />
      </div>
    </ArticleSection>
  </div>
</template>

<script setup lang="ts">
import ShortExperience from '~/components/experience/ShortExperience.vue'
import { useI18n } from 'vue-i18n'
import ArticleSection from '~/components/ArticleSection.vue'
import type { ApiResponse } from '~/types/apiResponse'

const { t, locale } = useI18n()
const { data } = await useFetch<ApiResponse>('/api/data', {
  query: { locale },
  watch: [locale],
})
const experiences = computed(() => data.value?.experiences || [])
const stacks = computed(() => data.value?.stacks || [])
</script>

<style scoped>
.tech-stack-grid {
  @apply grid gap-4;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}
</style>
