<script setup lang="ts">
import { ref, watch } from 'vue';
import ExpandIcon from '../shared/ExpandIcon.vue';

// const STORAGE_KEY = 'sidebarExpanded'
const COLLAPSED_WIDTH = '50px'
const EXPANDED_WIDTH = '200px'
const COLLAPSED_TRANSFORM = 'scale(1, 1)'
const EXPANDED_TRANSFORM = 'scale(-1, -1)'

//let sidebarExpanded = ref((localStorage.getItem(STORAGE_KEY) === 'true'))
let sidebarExpanded = ref(false)

const onExpand = () => {
    sidebarExpanded.value = !sidebarExpanded.value
    //localStorage.setItem(STORAGE_KEY, `${sidebarExpanded.value}`)
}

let computedRotation = ref<string>(COLLAPSED_TRANSFORM)
watch(sidebarExpanded, (value) => {
    if (value) {
        computedRotation.value = EXPANDED_TRANSFORM
    } else {
        computedRotation.value = COLLAPSED_TRANSFORM
    }
})

let computedWidth = ref(COLLAPSED_WIDTH)
watch(sidebarExpanded, (value) => {
    console.log('sidebarExpanded', sidebarExpanded.value)
    if (value) {
        computedWidth.value = EXPANDED_WIDTH
    } else {
        computedWidth.value = COLLAPSED_WIDTH
    }
})
</script>

<template>
    <div class="sidebar-container">
        <ExpandIcon stroke-color="white" size="20"/>
        <button class="e-button expand" @click="onExpand">
            {{ ">" }} </button>
    </div>
</template>

<style scoped>
.sidebar-container {
    width: v-bind(computedWidth);
}

.e-button.expand {
    transform: v-bind(computedRotation);
    transition: transform 0.5s ease;
}
</style>