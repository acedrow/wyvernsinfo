<script setup lang="ts">
import FacebookLink from './FacebookLink.vue';
import EmailLink from './EmailLink.vue';
import CalendarLink from './CalendarLink.vue';
import EventbriteLink from './EventbriteLink.vue';

const SvgStrokeColor = " #ffffffde"
const size = "30"
</script>

<template>
    <div class="row toplinks-container">
        <CalendarLink :strokeColor="SvgStrokeColor" :size="size" />
        <FacebookLink :strokeColor="SvgStrokeColor" :size="size" />
        <EventbriteLink :strokeColor="SvgStrokeColor" :size="size" />
        <EmailLink :strokeColor="SvgStrokeColor" :size="size" />
    </div>
</template>

<style lang="css" scoped>
.row.toplinks-container {
    margin-top: 15px;
}

.link-container {
    margin-right: 10px;
}
</style>