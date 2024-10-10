<script setup lang="ts">
import { CalendarEvent } from '../types';

const props = defineProps<{ calEvent: CalendarEvent }>()
const location = props.calEvent?.location
const meetingLink = props.calEvent?.hangoutLink
const discord = props.calEvent?.location?.toLocaleLowerCase().includes("wyverns discord")
const mapsBaseUrl = 'https://www.google.com/maps/search/?api=1&query='
const discordInvite = import.meta.env.VITE_DISCORD_INVITE
</script>

<template>
    <span v-if="location && !discord && !meetingLink"> 📍<a :href="mapsBaseUrl + location">
            {{ location.split(',')[0] }}
        </a></span>
    <span v-if="meetingLink"> 📟<a :href="meetingLink">
            Google Hangouts
        </a></span>
    <span v-if="discord"> 📟<a :href="discordInvite">
            Wyverns Discord
        </a></span>

</template>