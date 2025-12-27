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
      <div class="card-grid">
        <TechStack
          v-for="tech in stacks"
          :key="tech.name"
          :exp-name="tech.name"
          :exp-years="tech.experience"
        />
      </div>
    </ArticleSection>

    <ArticleSection section-id="connect" :title="t('sections.connect')">
      <div class="card-grid">
        <SmallConnect
          v-for="contact in contacts"
          :key="contact.type"
          :icon="contact.icon"
          :label="contact.label"
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
import SmallConnect from '~/components/connect/SmallConnect.vue'

const { t, locale } = useI18n()
const { data } = await useFetch<ApiResponse>('/api/data', {
  query: { locale },
  watch: [locale],
})
const experiences = computed(() => data.value?.experiences || [])
const stacks = computed(() => data.value?.stacks || [])
const contacts = computed(() => data.value?.contacts || [])
</script>

<style scoped>
.card-grid {
  @apply grid gap-4;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}
</style>
