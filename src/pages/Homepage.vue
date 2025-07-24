<script setup lang="ts">
import EventList from "../components/EventList/index.vue";
</script>

<template>
    <div>
        <p class="description">
            Official source of event calendar, practice schedule, and contact info for
            the Twin Cities Wyverns - Minnesota's premier armored combat team.
        </p>
        <br />
        <p>
            Contact us at
            <a href="mailto:info@mn-armored-combat.org">info@mn-armored-combat.org</a>
            with any questions!
        </p>
        <div class="divider"></div>
        <EventList />
    </div>
</template>

<style lang="css" scoped>
.description {
    margin: 10px 0;
}

.divider {
    border-top: solid #ffffffde;
    margin-top: 12px;
    padding-top: 5px;
}
</style>
