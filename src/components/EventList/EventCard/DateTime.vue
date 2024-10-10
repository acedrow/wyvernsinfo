<script setup lang="ts">
import dayjs from 'dayjs/esm/index.js'
import { CalendarEvent } from '../types';
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { parseRecurrenceString } from '../utils';

const props = defineProps<{ calEvent: CalendarEvent }>()
dayjs.extend(advancedFormat);

const dateFormat = "MMMM Do"
const timeFormat = 'h:mmA'

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
    <div class="row">
        <span v-if="!parsedRecurrence">
            <span>{{ startDate }}</span>
            <span v-if="startDate !== endDate"> {{ " - " + endDate }}</span>
        </span>
        <span v-if="parsedRecurrence">
            {{ parsedRecurrence }}
        </span>
    </div>
    <div class="row" v-if="calEvent?.start.dateTime">
        <span>
            {{
                startTime
                + " - "
                + endTime
            }}</span>
    </div>
</template>
