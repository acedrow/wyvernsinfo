<script setup lang="ts">
import EventList from './components/EventList/index.vue';
import TopLinks from './components/TopLinks/index.vue';
</script>

<template>
  <div class="outer-container">
    <TopLinks />
    <h1>wyverns.info</h1>
    <p>Official source of event calendar, practice schedule, and contact info for the Twin Cities Wyverns - Minnesota's first and only armored combat team.</p>
    <EventList />
  </div>
</template>

<style scoped>

.outer-container {
  min-width: 320px;
  max-width: 400px;
  height: 100vh;
  padding: 10px;
}
</style>