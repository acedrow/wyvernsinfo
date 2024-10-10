<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue';
import EventCard from './EventCard/index.vue'
import dayjs from 'dayjs/esm/index.js'
import { CalendarEvent } from './types';
import { filterEvents, sortEvents } from './utils';

let allEvents: Ref<CalendarEvent[]> = ref([])
let shownEvents: Ref<CalendarEvent[]> = ref([])
let errorMessage = ref("")
let showEvents = ref(true);
let showPractices = ref(true);
let showMeetings = ref(true);

watch([showEvents, showPractices, showMeetings], ([newShowEvents, newShowPractices, newShowMeetings]) => {
  shownEvents.value = filterEvents(newShowEvents, newShowPractices, newShowMeetings, allEvents.value)
})

onMounted(async () => {
  const baseUrl = "https://www.googleapis.com/calendar/v3/calendars"
  const result = await fetch(
    baseUrl + `/mn-armored-combat.org_6taqhiipfl1sf19eokjhj2ndtc@group.calendar.google.com/events?key=${import.meta.env.VITE_CALENDAR_API_KEY}&timeMin=2024-07-23T00:00:00Z`
  ).then((response) =>
    response.json()
  ).catch((error) => {
    errorMessage.value = error.message
  })

  const futureEvents = result.items.filter((calItem: CalendarEvent) =>
    calItem?.recurrence || dayjs(calItem?.start?.date ?? calItem?.start?.dateTime).isAfter(dayjs()))

  futureEvents.sort(sortEvents)

  allEvents.value = futureEvents
  shownEvents.value = futureEvents
  console.log('shownEvents.value', shownEvents.value)

})
</script>

<template>
    <div v-if="errorMessage.length > 0" class="error">{{ errorMessage }}</div>
    <EventCard v-for="event in shownEvents" :googleEvent="event"></EventCard>
</template>

<style scoped>
.outer-container {
  border-top: 2px solid white;
  margin-top: 10px;
  padding-top: 10px;
  min-height: 100%
}
.error {
  background-color: rgb(95, 5, 5);
  height: 100px;
}
</style>
