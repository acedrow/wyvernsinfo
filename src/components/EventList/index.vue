<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue';
import EventCard from './EventCard/index.vue'
import dayjs from 'dayjs/esm/index.js'
import { CalendarEvent } from './types';
import { filterEvents, sortEvents } from './utils';
import FilterButton from './FilterButton.vue';

let allEvents: Ref<CalendarEvent[]> = ref([])
let shownEvents: Ref<CalendarEvent[]> = ref([])
let errorMessage = ref("")

let showEvents = ref(!(localStorage.getItem('showEvents') === 'false'));
const onClickEventsFilter = () => {
  showEvents.value = !showEvents.value
  localStorage.setItem('showEvents', `${showEvents.value}`)
}
let showPractices = ref(!(localStorage.getItem('showPractices') === 'false'));
const onClickPracticeFilter = () => {
  showPractices.value = !showPractices.value
  localStorage.setItem('showPractices', `${showPractices.value}`)
}
let showMeetings = ref(!(localStorage.getItem('showMeetings') === 'false'));
const onClickMeetingsFilter = () => {
  showMeetings.value = !showMeetings.value
  localStorage.setItem('showMeetings', `${showMeetings.value}`)
}
watch([showEvents, showPractices, showMeetings], () => {
  shownEvents.value = filterEvents(showEvents.value, showPractices.value, showMeetings.value, allEvents.value)
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
  shownEvents.value = filterEvents(showEvents.value, showPractices.value, showMeetings.value, futureEvents)
})
</script>

<template>
  <h2 class="cal-header">Calendar</h2>
  <div class="filters-container">
    <h3>Filters:</h3>
    <div class="buttons-container">
      <FilterButton :shown="showEvents" label="Show Events" :callback="onClickEventsFilter" />
      <FilterButton :shown="showPractices" label="Show Practices" :callback="onClickPracticeFilter" />
      <FilterButton :shown="showMeetings" label="Show Meetings" :callback="onClickMeetingsFilter" />
    </div>
  </div>
  <div v-if="errorMessage.length > 0" class="error">{{ errorMessage }}</div>
  <EventCard v-for="event in shownEvents" :key="event.summary" :googleEvent="event"></EventCard>
</template>

<style scoped>
.outer-container {
  border-top: 2px solid white;
  margin-top: 10px;
  padding-top: 10px;
  min-height: 100%
}

.cal-header {
  border-top: solid #ffffffde;
  margin-top: 12px;
  padding: 5px 0;
}

.filters-container {
  margin-bottom: 10px;
  display: flex;
  min-height: 25px;
  align-items: start;
}

.error {
  background-color: rgb(95, 5, 5);
  height: 100px;
}
</style>
