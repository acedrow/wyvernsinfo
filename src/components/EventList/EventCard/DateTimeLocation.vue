<script setup lang="ts">
import dayjs from 'dayjs/esm/index.js'
import { CalendarEvent } from '../types';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { parseRecurrenceString } from '../utils';

const props = defineProps<{ calEvent: CalendarEvent }>()
dayjs.extend(advancedFormat);

const dateFormat = "MMMM Do"
const timeFormat = 'h:mmA'

const location = props.calEvent?.location
const meetingLink = props.calEvent?.hangoutLink
const discord = props.calEvent?.location?.toLocaleLowerCase().includes("wyverns discord")
const mapsBaseUrl = 'https://www.google.com/maps/search/?api=1&query='
const discordInvite = import.meta.env.VITE_DISCORD_INVITE

const startDate =
    dayjs(props.calEvent?.start.date
        ?? props.calEvent?.start.dateTime).format(dateFormat)
const endDate =
    dayjs(props.calEvent?.end.date
        ?? props.calEvent?.end.dateTime).format(dateFormat)

const startTime = dayjs(props.calEvent?.start.dateTime).format(timeFormat)

const endTime = dayjs(props.calEvent?.end.dateTime).format(timeFormat)
const parsedRecurrence = props.calEvent?.recurrence?.[0] ?
    parseRecurrenceString(props.calEvent.recurrence[0]) : undefined
</script>

<template>
    <div class="row date-time">
        <span v-if="!parsedRecurrence" class="data-span date">
            <span>{{ startDate }}</span>
            <span v-if="startDate !== endDate"> {{ " - " + endDate }}</span>
        </span>
        <span v-if="parsedRecurrence" class="data-span date">
            {{ parsedRecurrence }}
        </span>
        <span v-if="startDate === endDate" class="data-span">
            {{
                startTime
                + " - "
                + endTime
            }}</span>

    </div>
    <div class="row">
        <span v-if="location && !discord && !meetingLink" class="data-span"> 📍<a :href="mapsBaseUrl + location">
                {{ location.split(',')[0] }}
            </a></span>
        <span v-if="meetingLink" class="data-span"> 📟<a :href="meetingLink">
                Google Hangouts
            </a></span>
        <span v-if="discord" class="data-span"> 📟<a :href="discordInvite">
                Wyverns Discord
            </a></span>
    </div>

</template>

<style scoped>
.row.date-time {
    margin-top: 6px;
    flex-wrap: wrap;
}

.data-span {
    text-wrap: wrap;
    margin-left: 5px;
}

.data-span.date {
    font-weight: 500;
}

</style>
