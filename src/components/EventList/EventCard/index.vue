<script setup lang="ts">
import { ref, watch } from 'vue'
import DateTime from './DateTime.vue';
import Description from './Description.vue';
import { CalendarEvent } from '../types';
import Location from './Location.vue';

defineProps<{ calEvent: CalendarEvent }>()
const defaultExpanded = false
let expanded = ref<boolean>(defaultExpanded)
let computedTransform = ref<string>(defaultExpanded ? "rotate(90deg)" : "rotate(0)")

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
                <h3>{{ calEvent.summary }}</h3>
                <button v-if="calEvent?.description?.length > 0" class="e-button expand"
                    @click="expanded = !expanded">{{
                        ">"
                    }}</button>
            </div>
            <DateTime :calEvent="calEvent" />
            <Location :location="calEvent?.location" />
            <Description :description="calEvent?.description" :expanded="expanded" />
        </div>
    </div>
</template>

<style scoped>
.event-card {
    background-color: rgb(52, 89, 57);
    width: 320px;
    margin: 10px 0;
    padding: 0 7px 7px 7px
}

.row.header-row {
    align-items: end;
    justify-content: space-between;
}

.e-button.expand {
    transform: v-bind('computedTransform');
    transition: transform 0.5s ease;
}
</style>
