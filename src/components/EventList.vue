<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EventCard, { Event } from './EventCard.vue'
import dayjs from 'dayjs/esm/index.js'

//defineProps<{ msg: string }>()

let calendarEvents = ref({})
let errorMessage = ref("")

onMounted(async () => {
  const result = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/mn-armored-combat.org_6taqhiipfl1sf19eokjhj2ndtc@group.calendar.google.com/events?key=AIzaSyCdzng7YOC1YksouUz714HqPRr7zgxBu0Y&timeMin=2024-07-23T00:00:00Z`
  ).then((response) =>
    response.json()
  ).catch((error) => {
    errorMessage.value = error.message
  })
  calendarEvents.value =
    result.items.filter((calItem: Event) =>
      calItem?.recurrence || dayjs(calItem?.start?.date ?? calItem?.start?.dateTime)
        .isAfter(dayjs()))
  console.log(result.items)
})
</script>

<template>
  <div id="outer-container">
    <h1>wyverns.info</h1>
    <div v-if="errorMessage.length > 0" class="error">{{ errorMessage }}</div>
    <EventCard v-for="event in calendarEvents" :calEvent="event"></EventCard>
  </div>
</template>

<style scoped>
.error {
  background-color: rgb(95, 5, 5);
  height: 100px;
}

#outer-container {}
</style>
