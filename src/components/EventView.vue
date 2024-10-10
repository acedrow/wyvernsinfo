<script setup lang="ts">
import { ref } from 'vue'
import EventCard from './EventCard.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>wyverns.info</h1>
  <EventCard :event="{
    summary: 'Veronica',
    description: 'Veridian Dynamics'
  }"></EventCard>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
