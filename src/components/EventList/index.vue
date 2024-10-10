<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EventCard from './EventCard/index.vue'
import dayjs from 'dayjs/esm/index.js'
import { CalendarEvent } from './types';

let calendarEvents = ref({})
let errorMessage = ref("")

onMounted(async () => {
  const baseUrl = "https://www.googleapis.com/calendar/v3/calendars"
  const result = await fetch(
    baseUrl + `/mn-armored-combat.org_6taqhiipfl1sf19eokjhj2ndtc@group.calendar.google.com/events?key=${import.meta.env.VITE_CALENDAR_API_KEY}&timeMin=2024-07-23T00:00:00Z`
  ).then((response) =>
    response.json()
  ).catch((error) => {
    errorMessage.value = error.message
  })
  calendarEvents.value = result.items.filter((calItem : CalendarEvent) =>
    calItem?.recurrence || dayjs(calItem?.start?.date ?? calItem?.start?.dateTime).isAfter(dayjs()))
  console.log(result.items)
})
</script>

<template>
  <div id="outer-container">
    <h1>wyverns.info</h1>
    <p>A calendar event aggregator for Minnesota Armored Combat and the Twin Cities Wyverns</p>
    <a v-bind:href="'mailto:' + 'linden.holt@mn-armored-combat.org'">Contact Us</a>

    <div v-if="errorMessage.length > 0" class="error">{{ errorMessage }}</div>
    <EventCard v-for="event in calendarEvents" :googleEvent="event"></EventCard>
  </div>
</template>

<style scoped>
.error {
  background-color: rgb(95, 5, 5);
  height: 100px;
}

p {
  margin: 0;
  font-size: 18px;;
  max-width: 320px;
}
</style>
