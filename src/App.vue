<script setup lang="ts">
import EventList from './components/EventList/index.vue';
import TopMenu from './components/TopMenu/index.vue';

</script>

<template>
  <div class="app-container">
    <div class="main-column">
      <TopMenu />
      <p class="description">Official source of event calendar, practice schedule, and contact info for the Twin Cities Wyverns -
        Minnesota's premier armored combat team</p>
      <EventList />
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