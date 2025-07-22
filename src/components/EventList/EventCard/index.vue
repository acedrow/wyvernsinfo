<script setup lang="ts">

import { ref } from 'vue'
import DateTime from './DateTimeLocation.vue';
import Description from './Description.vue';
import EventTypeLabel from './EventTypeLabel.vue'
import { CalendarEvent } from '../types';
import { getEventType } from '../utils';

const props = defineProps<{ googleEvent: CalendarEvent }>()
let expanded = ref<boolean>(false)
const eventType = getEventType(props.googleEvent)

</script>

<template>
    <div class="event-card">
        <div class="col">
            <div class="row header-row">
                <h3>{{ googleEvent.summary }}</h3>
                <EventTypeLabel :event-type="eventType" />
            </div>
            <DateTime :cal-event="googleEvent" />
            <Description :description="googleEvent?.description || ''" :expanded="expanded" />
            <button v-if="googleEvent?.description && googleEvent?.description?.length > 0" class="show-info" @click="expanded = !expanded"
                :title="!expanded ? 'Show Event Info' : 'Hide Event Info'">
                {{ !expanded ? 'Show Info' : 'Hide Info' }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.event-card {
    background-color: var(--dark-green);
    margin: 15px 0;
    padding-bottom: 6px;
    border-radius: 6px;
}

.row.header-row {
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    background-color: var(--wyverns-green);
}

.row.expand-button-row {
    align-items: center;
    flex-grow: 100;
    justify-content: end;
    align-items: center;
}

.show-info {
    align-self: center;
    width: 100px;
    margin-top: 12px;
    background-color: var(--wyverns-green);
    font-family: monospace;
}
</style>
