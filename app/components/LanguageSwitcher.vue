<template>
  <div class="language-switcher">
    <button
      v-for="loc in availableLocales"
      :key="loc.code"
      :class="{ active: locale === loc.code }"
      class="lang-btn"
      @click="switchLocale(loc.code)"
    >
      {{ loc.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => locales.value)

const switchLocale = async (code: string) => {
  await setLocale(code)
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
}

.lang-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.375rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.lang-btn:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.lang-btn.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}
</style>
