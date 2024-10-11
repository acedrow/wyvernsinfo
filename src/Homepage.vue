<script setup lang="ts">
import TopMenu from './components/TopMenu/index.vue'
import EventList from './components/EventList/index.vue'
</script>

<template>
    <div>
        <TopMenu />
        <p class="description">Official source of event calendar, practice schedule, and contact info for the Twin
            Cities
            Wyverns -
            Minnesota's premier armored combat team.</p>
        <EventList />
    </div>
</template>