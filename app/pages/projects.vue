<template>
  <ArticleSection section-id="projects" :title="t('sections.projects')">
    <section id="projects">
      <Project
        v-for="project in projects"
        :key="project.name"
        :title="project.name"
        :description="project.description"
        :link="project.link"
        :technologies="project.technologies"
        :image="project.image"
      />
    </section>
  </ArticleSection>
</template>

<script setup lang="ts">
import ArticleSection from '~/components/ArticleSection.vue'
import Project from '~/components/Project.vue'
import type { ApiProjectResponse } from '~/types/project'
const { t, locale } = useI18n()

const { data } = await useFetch<ApiProjectResponse>('/api/projects', {
  query: { locale },
  watch: [locale],
})
const projects = computed(() => data.value?.projects || [])
</script>

<style>
#projects {
  @apply flex flex-col gap-6;
}
</style>
