<script setup lang="ts">
import { ref } from 'vue';
import { EventType } from '../types';
const props = defineProps<{ eventType: EventType }>()
const getBgColor = (eventType: EventType) => {
    if (eventType === EventType.home) {
        return '#bebe24'
    }
    if (eventType === EventType.away) {
        return '#4da4bf'
    }
    if (eventType === EventType.practice) {
        return '#ab5252'
    }
    if (eventType === EventType.meeting) {
        return '#83537d'
    }
    return "#000000"
}

let bgColor = ref<string>(getBgColor(props.eventType))

</script>

<template>
    <div v-if="eventType !== EventType.none"class="outer-container">
        {{ eventType }}
    </div>
</template>

<style scoped>
.outer-container {
    height: 20px;
    width: 60px;
    margin-right: 8px;

    border-radius: 5px;

    color: black;
    font-size: 12px;
    line-height: 20px;
    text-align: center;

    background-color: v-bind('bgColor');
}
</style>
