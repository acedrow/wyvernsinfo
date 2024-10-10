<script setup lang="ts">
import EventList from './components/EventList/index.vue';
import TopLinks from './components/TopLinks/index.vue';
</script>

<template>
  <div class="outer-container">
    <TopLinks />
    <h1>wyverns.info</h1>
    <p>Roost of the Twin Cities Wyverns - Minnesota's first and only armored combat team. Official source for event calendar, practice schedule, contact info and more.</p>
    <EventList />
  </div>
</template>

<style scoped>

.outer-container {
  min-width: 320px;
  max-width: 400px;
  height: 100vh;
}
</style>