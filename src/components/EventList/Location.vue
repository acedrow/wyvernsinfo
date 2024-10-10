<script setup lang="ts">
defineProps<{ location: string | undefined }>()
const mapsBaseUrl = 'https://www.google.com/maps/search/?api=1&query='
</script>

<template>
    <span v-if="location"> 📍<a :href="mapsBaseUrl + location">
            {{ location.split(',')[0] }}
        </a></span>

</template>