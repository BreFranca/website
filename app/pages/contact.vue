<template>
  <ArticleSection section-id="contact" :title="t('sections.contact')">
    <section class="contacts-grid">
      <Connect
        v-for="contact in contacts"
        :key="contact.url"
        :link="contact.url"
        :icon="contact.icon"
        :label="contact.label"
        :description="contact.description"
      />
    </section>
  </ArticleSection>
</template>

<script setup lang="ts">
import ArticleSection from '~/components/ArticleSection.vue'
import Connect from '~/components/connect/Connect.vue'
import type { ApiContactResponse } from '~/types/contacts'

const { t } = useI18n()
const { data } = await useFetch<ApiContactResponse>('/api/contacts')

const contacts = computed(() => data.value?.contacts || [])
</script>

<style scoped>
.contacts-grid {
  @apply grid grid-cols-1 gap-6 sm:grid-cols-2;
}
</style>
