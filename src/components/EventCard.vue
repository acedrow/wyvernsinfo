<script setup lang="ts">
import { ref, watch } from 'vue'
import dayjs from 'dayjs/esm/index.js'
import DateLine from './DateLine.vue';

export type Event = {
    summary: string;
    description: string;
    start: {
        date?: string;
        dateTime?: string;
    }
    recurrence?: [string] | undefined;
};

defineProps<{ calEvent: Event }>()
let expanded = ref<boolean>(false)
let computedTransform = ref<string>("rotate(0)")
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
        <span class="row header-row">
            <h2>{{ calEvent.summary }}</h2>
            <button v-if="calEvent?.description?.length > 0" id="expand-button" @click="expanded = !expanded">{{ ">"
                }}</button>
        </span>
        <DateLine :calEvent="calEvent" />
        <span>{{ }}</span>
        <p v-if="expanded">{{ calEvent.description }}</p>
    </div>
</template>

<style scoped>
.event-card {
    background-color: rgb(52, 89, 57);
    width: 320px;
    margin: 10px 0;
    padding: 7px;
}

.row.header-row {
    align-items: end;
    justify-content: space-between;
}

#expand-button {
    width: fit-content;
    font-size: 28px;
    font-weight: 800;
    transform: v-bind('computedTransform');
    transition: transform 0.5s ease
}
</style>
