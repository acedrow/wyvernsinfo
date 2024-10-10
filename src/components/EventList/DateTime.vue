<script setup lang="ts">
import dayjs from 'dayjs/esm/index.js'
import { Event } from './EventCard.vue';

const props = defineProps<{ calEvent: Event }>()

const bydayToDayString = {
    mo: "Monday",
    tu: "Tuesday",
    we: "Wednesday",
    th: "Thursday",
    fr: "Friday",
    sa: "Saturday",
    su: "Sunday"
}

const dateFormat = "MM/DD/YY"
const timeFormat = 'h:mmA'

const startDate =
    dayjs(props.calEvent?.start.date
        ?? props.calEvent?.start.dateTime).format(dateFormat)
const endDate =
    dayjs(props.calEvent?.end.date
        ?? props.calEvent?.end.dateTime).format(dateFormat)

const startTime = dayjs(props.calEvent?.start.dateTime).format(timeFormat)

const endTime = dayjs(props.calEvent?.end.dateTime).format(timeFormat)


const parseRecurrence = (recurrence: string | undefined) => {
    console.log('parseRecurrence', recurrence)
    if (!recurrence || recurrence.length < 1) {
        return undefined
    }
    if (recurrence.includes('WEEKLY')) {
        const byday = Object.keys(bydayToDayString)?.find((byday) => recurrence.includes("BYDAY=" + byday.toUpperCase()))
        //@ts-ignore
        return "Each " + bydayToDayString[byday]
    }
}
</script>

<template>
    <div class="row">
        <span v-if="!calEvent.recurrence">
            <span>{{ startDate }}</span>
            <span v-if="startDate !== endDate"> {{ " - " + endDate }}</span>
        </span>
        <span v-if="calEvent.recurrence">
            {{ parseRecurrence(calEvent?.recurrence?.[0]) }}
        </span>
    </div>
    <div class="row" v-if="calEvent?.start.dateTime">
        <span v-if="!calEvent.recurrence">
            {{
                startTime
                + " - "
                + endTime
            }}</span>
    </div>
</template>
