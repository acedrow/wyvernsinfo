<script setup lang="ts">
import EventList from "../components/EventList/index.vue";
</script>

<template>
    <div>
        <p :class="{ 'description': true }">
            Official source of event calendar, practice schedule, and contact info for
            the Twin Cities Wyverns - Minnesota's premier armored combat team.
        </p>
        <br />
        <p>
            Contact us at
            <a href="mailto:info@mn-armored-combat.org">info@mn-armored-combat.org</a>
            with any questions!
        </p>
        <a href="https://www.facebook.com/tcwyverns/"><img src="https://s.magecdn.com/social/mw-facebook.svg"
                :class="{ 'social-icon': true }" /></a>
        <a href="https://www.instagram.com/twincitieswyverns"><img src="https://s.magecdn.com/social/mw-instagram.svg"
                :class="{ 'social-icon': true }" /></a>
        <a href="https://www.reddit.com/user/twincitieswyverns/"><img src="https://s.magecdn.com/social/mw-reddit.svg"
                :class="{ 'social-icon': true }" /></a>
        <div class="divider"></div>
        <EventList />
    </div>
</template>

<style lang="css" scoped>

.social-icon {
    width: 25px;
    height: 25px;
    margin: 15px 15px 0px 0;
}

.description {
    margin: 10px 0;
}

.divider {
    border-top: solid #ffffffde;
    margin-top: 12px;
    padding-top: 5px;
}
</style>
