<script setup lang="ts">
import dayjs from 'dayjs/esm/index.js'
import { Event } from './EventCard.vue';

defineProps<{ calEvent: Event }>()

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
const dtDate = 'MM/DD/YY'
const dtTime = 'h:mmA'


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
            {{
                dayjs(calEvent?.start.date).format(dateFormat)
                + " - "
                + dayjs(calEvent?.end.date).format(dateFormat)
            }}</span>
        <span v-if="calEvent.recurrence">
            {{ parseRecurrence(calEvent?.recurrence?.[0])
                + dayjs(calEvent?.start.dateTime).format('- h:mm') }}
        </span>
    </div>
    <div class="row" v-if="calEvent?.start.dateTime">
        <span v-if="!calEvent.recurrence">
            {{
                dayjs(calEvent?.start.dateTime).format(dtTime)
                + " - "
                + dayjs(calEvent?.end.dateTime).format(dtTime)
            }}</span>
    </div>
</template>
