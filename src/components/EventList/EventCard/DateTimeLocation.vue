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
const mapsBaseUrl = 'https://www.google.com/maps/search/?api=1&query='
const startDateTime = props.calEvent?.start?.dateTime
const endDateTime = props.calEvent?.end?.dateTime
const startDateValue = props.calEvent?.start?.date ?? startDateTime
const endDateValue = props.calEvent?.end?.date ?? endDateTime

const startDate =
    startDateValue ? dayjs(startDateValue).format(dateFormat) : ''
const endDate =
    endDateValue ? dayjs(endDateValue).format(dateFormat) : ''

const startTime = startDateTime ? dayjs(startDateTime).format(timeFormat) : ''

const endTime = endDateTime ? dayjs(endDateTime).format(timeFormat) : ''
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
        <span v-if="location && !meetingLink" class="data-span"> 📍<a :href="mapsBaseUrl + location">
                {{ location.split(',')[0] }}
            </a></span>
        <span v-if="meetingLink" class="data-span"> 📟<a :href="meetingLink">
                Google Hangouts
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
