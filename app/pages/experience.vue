<template>
  <div>
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

    <ArticleSection section-id="skills" :title="t('sections.techStack')">
      <section class="flex flex-wrap gap-2">
        <Badge v-for="skill in skills.flatMap(skill => skill.name)" :key="skill" :label="skill" />
      </section>
    </ArticleSection>
  </div>
</template>

<script setup lang="ts">
import ArticleSection from '~/components/ArticleSection.vue'
import Badge from '~/components/Badge.vue'
import Experience from '~/components/experience/Experience.vue'
import type { ApiExperiencesResponse } from '~/types/experience'

const { t } = useI18n()

const { data } = await useFetch<ApiExperiencesResponse>('/api/experiences')
const experiences = computed(() => data.value?.experiences || [])
const skills = computed(() => data.value?.stacks || [])
</script>
