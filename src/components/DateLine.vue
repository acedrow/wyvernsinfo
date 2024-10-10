<script setup lang="ts">
import { ref, watch } from 'vue'
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

//TODO: regex!
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
const recurrence = ref(parseRecurrence(props.calEvent?.recurrence?.[0]))

</script>

<template>
    <span class="row">
        <span v-if="!recurrence"> {{ calEvent?.start?.date
            ? dayjs(calEvent?.start.date).format('MM/DD/YYYY')
            : dayjs(calEvent?.start.dateTime).format('MM/DD/YYYY - h:m') }}
        </span>
        <span v-if="recurrence"> {{ parseRecurrence(calEvent?.recurrence?.[0]) + " - " +
            dayjs(calEvent?.start.dateTime).format('h:m') }}
        </span>
    </span>
</template>
