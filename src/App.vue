<script setup lang="ts">
import EventList from './components/EventList/index.vue';
import TopLinks from './components/TopLinks/index.vue';
</script>

<template>
  <div class="outer-container">
    <TopLinks />
    <h1>wyverns.info</h1>
    <p>A calendar event aggregator for Minnesota Armored Combat and the Twin Cities Wyverns</p>
    <EventList />
  </div>
</template>

<style scoped>

.outer-container {
  width: 320px;
}
</style>