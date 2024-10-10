<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ shown: boolean, label: string, callback: () => void }>()
const getButtonClass = (shown: boolean) => shown ? 'active' : 'inactive';
const buttonClass = ref(getButtonClass(props.shown))

watch(() => props.shown, (newShown) => {
    buttonClass.value = getButtonClass(newShown)
})
</script>

<template>
    <button class="filter-button" :class="buttonClass" @click="callback">{{ label }}</button>
</template>

<style scoped>
.filter-button {
    margin: 0 2px;
    border-radius: 5px;
}

.active {
    color: white;
    background-color: black;
}

.inactive {
    color: gray;
}
</style>
