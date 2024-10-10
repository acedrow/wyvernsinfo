<script setup lang="ts">
import { ref } from "vue";
import { matchEventType } from "../utils";
import ExpandIcon from "../../shared/ExpandIcon.vue";
import CollapsibleSection from "../../shared/CollapsibleSection.vue";

const props = defineProps<{ description: string; expanded: boolean }>();

const audienceDesc = (props.description.split("Fighters:")[0] ?? '').replace(matchEventType, '');

const fighterSection = props.description.split("Fighters:")[1] ?? undefined;
const fightersExpanded = ref(false);



</script>

<template>
    <CollapsibleSection :expanded="expanded">
        <p v-html="audienceDesc"></p>
        <div v-if="fighterSection && expanded">
            <div class="row fighter-row">
                <h4>Fighter Info</h4>
                <button class="e-button expand" @click="fightersExpanded = !fightersExpanded">
                    <ExpandIcon stroke-color="white" size="20" :flipped="fightersExpanded" />
                </button>
            </div>
            <CollapsibleSection :expanded="fightersExpanded">
                <p v-html="fighterSection"></p>
            </CollapsibleSection>
        </div>
    </CollapsibleSection>

</template>

<style scoped>
.row.fighter-row {
    align-items: end;
    justify-content: space-between;
}

.fighter-desc {}
</style>
