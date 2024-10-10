<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EventCard from './EventCard/index.vue'
import dayjs from 'dayjs/esm/index.js'
import { CalendarEvent } from './types';

let calendarEvents = ref({})
let errorMessage = ref("")

const sortEvents = (a: CalendarEvent, b: CalendarEvent): number => {
  if (a.recurrence) {
    if (b.recurrence) {
      return 0
    }
    return -1
  }
  return (
    dayjs(a?.start?.date ?? a.start.dateTime)
      .isBefore(dayjs(b?.start?.date ?? b.start.dateTime)) ? -1 : 1
  )
}

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

  calendarEvents.value = futureEvents

})
</script>

<template>
  <div v-if="errorMessage.length > 0" class="error">{{ errorMessage }}</div>
  <EventCard v-for="event in calendarEvents" :googleEvent="event"></EventCard>
</template>

<style scoped>
.error {
  background-color: rgb(95, 5, 5);
  height: 100px;
}
</style>
