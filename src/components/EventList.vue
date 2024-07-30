<script setup lang="ts">
import EventCard from './EventCard.vue'

defineProps<{ msg: string }>()
</script>

<template>
  <div id="outer-container">
    <h1>wyverns.info</h1>
    <EventCard :event="{
      summary: 'summary',
      description: 'description'
    }"></EventCard>
  </div>
</template>

<style scoped>
#outer-container {
  height: 500px;
}
</style>
