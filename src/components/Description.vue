<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{ description: string; expanded: boolean }>();

const audienceDesc = props.description.split("Fighters:")[0] || undefined;
const fighterSection = props.description.split("Fighters:")[1] || undefined;
const fightersExpanded = ref(false);

let computedTransform = ref<string>("rotate(0)")
watch(fightersExpanded, (value) => {
    if (value) {
        computedTransform.value = "rotate(90deg)"
    } else {
        computedTransform.value = "rotate(0)"
    }
})
</script>

<template>
    <p v-if="expanded && audienceDesc">{{ audienceDesc }}</p>
    <Transition>
        <div v-if="fighterSection && expanded">
            <div class="row fighter-row">
                <h3>Fighter Info</h3>
                <button class="e-button expand" @click="fightersExpanded = !fightersExpanded">
                    {{ ">" }} </button>
            </div>
            <p v-if="fightersExpanded" class="fighter-desc"> {{ fighterSection }} </p>



        </div>
    </Transition>
</template>

<style scoped>
.v-leave-active {
  transition: height 0.5s ease;
}

.fighter-desc {}

.e-button.expand {
    transform: v-bind('computedTransform');
    transition: transform 0.5s ease;
}

.row.fighter-row {
    align-items: end;
    justify-content: space-between;
}

h3 {
    font-size: 18px;

}
</style>
