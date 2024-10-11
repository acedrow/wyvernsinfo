<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>

  <div class="app-container">
    <div class="main-column">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  max-width: 500px;
  height: 100vh;
  padding: 0 10px;
  display: flex;
}

.description {
  margin-top: 8px;
}

.main-column {
  width: 100%;
}
</style>