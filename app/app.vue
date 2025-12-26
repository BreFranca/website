<script setup lang="ts">
import About from '~/components/About.vue'
import Menu from './components/Menu.vue'
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <About />
    <Menu />
    <NuxtPage />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

main {
  min-height: 100vh;
}

.scrollbar-custom::-webkit-scrollbar {
  height: 4px;
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 4px;
}
</style>
