<template>
  <ArticleSection sectionId="experience" :title="t('sections.experience')">
    <template v-for="experience in experiences" :key="experience.id">
      <ShortExperience
        :role="experience.role"
        :company="experience.company"
        :companyUrl="experience.companyUrl"
        :period="experience.period"
      />
    </template>
  </ArticleSection>
</template>

<script setup lang="ts">
import ShortExperience from '~/components/experience/ShortExperience.vue'
import { useI18n } from 'vue-i18n'
import ArticleSection from '~/components/ArticleSection.vue'
const { t } = useI18n()
const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Tech Solutions',
    companyUrl: 'https://techsolutions.com',
    period: 'Jan 2020 - Present',
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'WebWorks',
    companyUrl: 'https://webworks.com',
    period: 'Jun 2018 - Dec 2019',
  },
]
</script>
