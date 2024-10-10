<script setup lang="ts">
import { ref, watch } from 'vue';

let props = defineProps<{ expanded: boolean, showBorder?: boolean }>()

const COLLAPSED_HEIGHT = '0'
const EXPANDED_HEIGHT = '100000'

let computedHeight = ref<string>(props.expanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT)
watch(() => props.expanded, (newExpanded) => {
    if (newExpanded) {
        computedHeight.value = EXPANDED_HEIGHT
    } else {
        computedHeight.value = COLLAPSED_HEIGHT
    }
})
</script>

<template>
    <Transition>
        <div v-if="expanded" :class="showBorder ? 'decorated-container' : ''">
            <slot class="child-container"></slot>
        </div>
    </Transition>
</template>

<style scoped>

.decorated-container {
    margin-top: 6px;
    padding-top: 6px;
    border-top: 1px solid white
}

.v-enter-active,
.v-leave-active {
    transition: max-height 0.35s ease-in;
    max-height: 500px;
    overflow: hidden;

}

.v-enter-from,
.v-leave-to {
    transition: max-height 0.35s ease-out;
    max-height: 0px;
    overflow: hidden;


}
</style>
