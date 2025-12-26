<template>
  <footer class="footer">
    <div class="container">
      <p>© {{ currentYear }} Breno França. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  @apply border-t border-border bg-white py-6;
}

.footer p {
  @apply m-0 text-center text-sm text-muted;
}
</style>
