<script setup lang="ts">
import { ref } from 'vue'

type Event = {
    summary: string;
    description: string;
};

defineProps<{ event: Event }>()

const expanded = ref(false)
</script>

<template>
    <div class="eventCard">
        <div class="col">
            <button @click="expanded = !expanded">{{ expanded ? ">" : "<" }}</button>
                    <p v-if="expanded">Vue is awesome!</p>
        </div>
    </div>


</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
