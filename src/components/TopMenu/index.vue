<script setup lang="ts">
import { ref } from 'vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';
import MenuItems from './MenuItems.vue';

let expanded = ref<boolean>(false)
</script>

<template>
    <div class="row topmenu-container">

        <h1 class="main-header">wyverns.info</h1>
        <!-- <button class="menu-button" @click="expanded = !expanded"
            :title="!expanded ? 'Show Menu' : 'Hide Menu'">
            <svg viewBox="0 0 50 50" width="30" :height="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="white"
                    d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
            </svg></button> -->
    </div>
    <CollapsibleSection class="menu" :expanded="expanded">
        <MenuItems />
    </CollapsibleSection>
</template>

<style lang="css" scoped>
.main-header {
    margin: 2px 0 6px 6px;
}

.row.topmenu-container {
    width: 100%;
    background-color: var(--wyverns-green);
    justify-content: space-between;
}

.menu {
    padding: 6px;
    background-color: var(--med-gray);
}

.row.links-container {
    padding: 5px;
    padding-bottom: 0;
}

.icon-container {
    margin-right: 10px;
}

.menu-button {
    height: 41px;
    padding: 5px;
    padding-bottom: 0;
    background-color: var(--dark-green);
}
</style>