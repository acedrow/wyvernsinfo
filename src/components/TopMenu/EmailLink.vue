<script setup lang="ts">
defineProps<{ strokeColor: string, size: string }>()

</script>

<template>
    <a class="icon-container" v-bind:href="'mailto:' + 'linden.holt@mn-armored-combat.org'" >
        <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_429_11225)">
                <path d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" :stroke="strokeColor"
                    stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 5L12 14L21 5" :stroke="strokeColor" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_429_11225">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </a>

</template>
