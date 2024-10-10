<script setup lang="ts">

import { ref, watch } from 'vue'
import DateTime from './DateTime.vue';
import Description from './Description.vue';
import EventTypeLabel from './EventTypeLabel.vue'
import { CalendarEvent } from '../types';
import Location from './Location.vue';
import { getEventType } from '../utils';

const props = defineProps<{ googleEvent: CalendarEvent }>()
const defaultExpanded = false
let expanded = ref<boolean>(defaultExpanded)
let computedTransform = ref<string>(defaultExpanded ? "rotate(90deg)" : "rotate(0)")
const eventType = getEventType(props.googleEvent)
watch(expanded, (value) => {
    if (value) {
        computedTransform.value = "rotate(90deg)"
    } else {
        computedTransform.value = "rotate(0)"
    }
});

</script>

<template>
    <div class="event-card">
        <div class="col">
            <div class="row header-row">
                <EventTypeLabel :event-type="eventType" />
                <h3>{{ googleEvent.summary }}</h3>
                <div class="row expand-button-row">
                    <button v-if="googleEvent?.description?.length > 0" class="e-button expand"
                        @click="expanded = !expanded" :title="!expanded ? 'Show Event Info' : 'Hide Event Info'">{{
                            ">"
                        }}</button>
                </div>
            </div>
            <DateTime :cal-event="googleEvent" />
            <Location :cal-event="googleEvent" />
            <Description :description="googleEvent?.description" :expanded="expanded" />
        </div>
    </div>
</template>

<style scoped>
.event-card {
    background-color: rgb(52, 89, 57);
    margin: 10px 0;
    padding: 0 7px 7px 7px
}

.row.header-row {
    align-items: center;
    justify-content: space-between;
}

.row.expand-button-row {
    align-items: center;
    flex-grow: 100;
    justify-content: end;
    align-items: center;
}


.e-button.expand {
    transform: v-bind('computedTransform');
    transition: transform 0.5s ease;
}
</style>
