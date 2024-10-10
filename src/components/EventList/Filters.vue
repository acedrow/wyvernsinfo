<script setup lang="ts">
defineProps<{ showEvents: boolean, showPractices: boolean, showMeetings: boolean }>()


</script>

<template>
    FILTERS COMPONENT:
    Filters: <br />
    
    <!-- Events: <input type="checkbox" @input="console.log('event', event.target.value)"/> -->
    Practices: <input type="checkbox" :value="showPractices"/>
    Meetings: <input type="checkbox" :value="showMeetings"/>
    <!-- <div v-if="!showEvents && !showPractices && !showMeetings">
        No events to display - all filters are disabled.
    </div> -->
</template>