<script setup lang="ts">
import { ref, watch } from 'vue';

let props = defineProps<{
    strokeColor: string,
    size: string,
    flipped?: boolean,
    rotation?: number
}>()
const NORMAL_TRANSFORM = 'scale(1, 1)'
const FLIPPED_TRANSFORM = 'scale(-1, -1)'

let computedTransform = ref<string>(NORMAL_TRANSFORM)
watch(() => props.flipped, (newFlipped) => {
    if (newFlipped) {
        computedTransform.value = FLIPPED_TRANSFORM
    } else {
        computedTransform.value = NORMAL_TRANSFORM
    }
})

</script>

<template>
    <div class="expand-icon-container expand">
        <svg :fill="strokeColor" :width="size" :height="size" :transform="`rotate(${rotation ?? 0})`" version="1.1"
            id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330.002 330.002" xml:space="preserve">
            <path id="XMLID_105_" d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21
	c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3
	C331.972,223.623,330.628,214.221,324.001,209.25z" />
        </svg>
    </div>
</template>

<style scoped>
.expand-icon-container {
    transform: rotate(90deg);
}

.expand-icon-container.expand {
    transform: v-bind(computedTransform);
    transition: transform 0.5s ease;
}
</style>
