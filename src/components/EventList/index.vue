<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue';
import EventCard from './EventCard/index.vue'
import dayjs from 'dayjs/esm/index.js'
import { CalendarEvent } from './types';
import { filterEvents, sortEventsByStartTime, sortEventsByStartTimeNoRecur } from './utils';
import FilterButton from './FilterButton.vue';

let allEvents: Ref<CalendarEvent[]> = ref([])
let shownEvents: Ref<CalendarEvent[]> = ref([])
let errorMessage = ref("")

let showEvents = ref(!(localStorage.getItem('showEvents') === 'false'));
const onClickEventsFilter = () => handleFilterClick(true, false, false, false)

let showPractices = ref((localStorage.getItem('showPractices') === 'true'));
const onClickPracticeFilter = () => handleFilterClick(false, true, false, false)

let showMeetings = ref((localStorage.getItem('showMeetings') === 'true'));
const onClickMeetingsFilter = () => handleFilterClick(false, false, true, false)

let showAll = ref((localStorage.getItem('showAll') === 'true'));
const onClickAllFilter = () => handleFilterClick(false, false, false, true)

const handleFilterClick = (
  events: boolean,
  practices: boolean,
  meetings: boolean,
  all: boolean
) => {
  showEvents.value = events
  showPractices.value = practices
  showMeetings.value = meetings
  showAll.value = all
  localStorage.setItem('showEvents', `${events}`)
  localStorage.setItem('showPractices', `${practices}`)
  localStorage.setItem('showMeetings', `${meetings}`)
  localStorage.setItem('showAll', `${all}`)
}

watch([showEvents, showPractices, showMeetings, showAll, allEvents], ([nEvents, nPractices, nMeetings, nAll, _]) => {
  if (!nEvents && !nPractices && !nMeetings && !nAll) {
    showEvents.value = true
  }
  if (nAll) {
    shownEvents.value = allEvents.value;
  }
  else {
    shownEvents.value = filterEvents(nEvents, nPractices, nMeetings, allEvents.value)
  }
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

  //only care about events in the future
  const futureEvents = result.items.filter((calItem: CalendarEvent) =>
    calItem?.recurrence || dayjs(calItem?.start?.date ?? calItem?.start?.dateTime).isAfter(dayjs()))

  //remove duplicate events - keeping only the oldest copy of each event
  const uniqueEvents: CalendarEvent[] = []
  const parsedEventSummaries: String[] = []

  futureEvents.forEach((fevent: CalendarEvent) => {
    if (parsedEventSummaries.includes(fevent.summary)) {
      return;
    }
    const copies: CalendarEvent[] = []

    //collect all events with the identical summaries in copies
    futureEvents.forEach((compareEvent: CalendarEvent) => {
      if (fevent.summary === compareEvent.summary) {
        copies.push(compareEvent)
      }
    })
    copies.sort(sortEventsByStartTimeNoRecur);

    uniqueEvents.push(copies[0])
    parsedEventSummaries.push(fevent.summary)
  })

  uniqueEvents.sort(sortEventsByStartTime)

  allEvents.value = uniqueEvents
})
</script>

<template>
  <h2 class="cal-header">Calendar</h2>
  <div class="row filters-container">
    <div class="row buttons-container">
      <FilterButton :first="true" :shown="showEvents" label="Events" :callback="onClickEventsFilter" />
      <FilterButton :shown="showPractices" label="Practices" :callback="onClickPracticeFilter" />
      <FilterButton :shown="showMeetings" label="Meetings" :callback="onClickMeetingsFilter" />
      <FilterButton :shown="showAll" label="All" :callback="onClickAllFilter" />
    </div>
  </div>
  <div v-if="errorMessage.length > 0" class="error">{{ errorMessage }}</div>
  <EventCard v-for="event in shownEvents" :key="event.id" :googleEvent="event"></EventCard>
</template>

<style scoped>
/* TODO: remove winter break notif come spring */
.winter-break {
  max-width: 500px;
  height: fit-content;
  font-weight: 600;
  padding: 10px;
  border: 2px solid #008EAA;
  background-color: #003865;
}

.cal-header {
  border-top: solid #ffffffde;
  margin-top: 12px;
  padding-top: 5px;
}

.row.filters-container {
  margin-bottom: 10px;
  min-height: 30px;
  align-items: center;
  flex-wrap: wrap;
}

.filters-header {
  margin-right: 2px;
}

.row.buttons-container {
  align-items: center;
  margin-top: 2px;
  flex-wrap: wrap;
}

.error {
  background-color: rgb(95, 5, 5);
  height: 100px;
}
</style>
