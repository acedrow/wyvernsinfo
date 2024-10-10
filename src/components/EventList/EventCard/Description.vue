<script setup lang="ts">
import { matchEventType } from "../utils";
import CollapsibleSection from "../../shared/CollapsibleSection.vue";

const props = defineProps<{ description: string; expanded: boolean }>();

const audienceDesc = (props.description.split("Fighters:")[0] ?? '').replace(matchEventType, '');

const fighterSection = props.description.split("Fighters:")[1] ?? undefined;

</script>

<template>
    <CollapsibleSection :expanded="expanded" :show-border="true" class="description">
        <p v-html="audienceDesc"></p>
        <div v-if="fighterSection" class="fighter-info-container">
            <span class="fighter-info-title">Fighter Info:</span>
            <span v-html="fighterSection"></span>
        </div>
    </CollapsibleSection>

</template>

<style scoped>
.fighter-info-title {
    font-weight: 700;
}

.description {
    margin: 6px;
}

.fighter-info-container {
    margin-top: 12px;
}
</style>
