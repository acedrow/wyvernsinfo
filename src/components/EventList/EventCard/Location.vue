<script setup lang="ts">
import { CalendarEvent } from '../types';

const props = defineProps<{ calEvent: CalendarEvent }>()
const location = props.calEvent?.location
const meetingLink = props.calEvent?.hangoutLink
const mapsBaseUrl = 'https://www.google.com/maps/search/?api=1&query='
</script>

<template>
    <span v-if="location"> 📍<a :href="mapsBaseUrl + location">
            {{ location.split(',')[0] }}
        </a></span>
    <span v-if="meetingLink"> 📟<a :href="meetingLink">
            Google Hangouts
        </a></span>

</template>