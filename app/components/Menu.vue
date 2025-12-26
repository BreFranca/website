<template>
  <div class="container">
    <nav class="tabs-nav">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.id"
        :to="tab.id === 'home' ? '/' : `/${tab.id}`"
        :class="['tab-link', { active: isActiveTab(tab.id) }]"
      >
        {{ tab.label }}
      </NuxtLink>
    </nav>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const { tabs } = useMenu()

const isActiveTab = (tabId: string) => {
  const currentPath = route.path

  // Se for a home
  if (tabId === 'home') {
    return currentPath === '/'
  }

  // Para outras tabs, verifica se a URL começa com o id da tab
  return currentPath.startsWith(`/${tabId}`)
}
</script>

<style scoped>
.tabs-nav {
  @apply border-border flex gap-6 overflow-x-auto border-b pb-4;
}

.tabs-nav::-webkit-scrollbar {
  height: 4px;
}

.tabs-nav::-webkit-scrollbar-track {
  background: transparent;
}

.tabs-nav::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 4px;
}

.tab-link {
  @apply text-muted whitespace-nowrap border-b-2 border-transparent py-1 text-sm font-medium transition-colors duration-200 ease-in-out;
}

.tab-link:hover {
  @apply text-muted;
}

.tab-link.active {
  @apply border-accent text-muted;
}
</style>
