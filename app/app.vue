<script setup lang="ts">
import About from '~/components/About.vue'
import Menu from './components/Menu.vue'
</script>

<template>
  <NuxtRouteAnnouncer />
  <main>
    <About />
    <Menu />
    <div id="content">
      <NuxtPage />
    </div>
    <Footer />
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#content {
  flex: 1;
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
