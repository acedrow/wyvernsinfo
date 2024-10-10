<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ shown: boolean, label: string, callback: () => boolean }>()
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
}

.active {
    color: white;
}

.inactive {
    color: gray;
}
</style>
