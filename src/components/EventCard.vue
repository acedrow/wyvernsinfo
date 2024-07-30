<script setup lang="ts">
import { ref, watch } from 'vue'

type Event = {
    summary: string;
    description: string;
};

defineProps<{ event: Event }>()

let expanded = ref<boolean>(false)
let computedTransform = ref<string>("rotate(0)")
watch(expanded, (value) => {
    if (value) {
        computedTransform.value = "rotate(90deg)"
    } else {
        computedTransform.value = "rotate(0)"
    }
});


</script>

<template>
    <div class="event-card">
        <div class="col">
            <div class="row" id="header-row">
                <h2>{{ event.summary }}</h2>
                <button id="expand-button" @click="expanded = !expanded">{{ ">" }}</button>

            </div>
            <p v-if="expanded">{{ event.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.event-card {
    background-color: rgb(52, 89, 57);
    width: 320px;
    margin: 10px 0;
}

#header-row {
    align-items: end;
    justify-content: space-between;
}

#expand-button {
    background-color: transparent;
    width: fit-content;
    font-size: 28px;
    font-weight: 800;
    transform: v-bind('computedTransform');
    transition: transform 0.5s ease
}
</style>
