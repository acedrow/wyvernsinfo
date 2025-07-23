<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
    first?: boolean;
    shown: boolean;
    label: string;
    callback: () => void;
}>();
const getButtonClass = (shown: boolean) => (shown ? "active" : "inactive");
const buttonClass = ref(getButtonClass(props.shown));

watch(
    () => props.shown,
    (newShown) => {
        buttonClass.value = getButtonClass(newShown);
    }
);
</script>

<template>
    <button class="filter-button" :class="{
        active: buttonClass === 'active',
        inactive: buttonClass === 'inactive',
        first: first,
    }" @click="callback">
        {{ label }}
    </button>
</template>

<style scoped>
.filter-button {
    font-size: 20px;
    margin: 2px 0;
    height: 20px;
    text-wrap: nowrap;
}

.first {
    padding-left: 0;
}

.active {
    color: white;
    background-color: transparent;
}

.inactive {
    color: gray;
    background-color: transparent;
}
</style>
