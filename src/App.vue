<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopMenu from "./components/Header/index.vue";

</script>

<template>

  <div class="app-container">
    <div class="col main-column">
      <TopMenu />
      <div class="content-container">
        <RouterView class="content"/>
      </div>
      <footer class="footer" > </footer>

    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
} 

.content {
  width: 100%;
}

.col.main-column {
  width: 100%;
  align-items: center;
}

.content-container {
  margin-top: 15px; 
  max-width: 500px;
  width: 100%;
  display: flex;
}

.footer {
  width: 100%;
  min-height: 50px;
}
</style>