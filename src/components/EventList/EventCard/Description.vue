<script setup lang="ts">
import { matchEventType } from "../utils";
import CollapsibleSection from "../../shared/CollapsibleSection.vue";

const props = defineProps<{ description: string; expanded: boolean }>();

const audienceDesc = (props.description.split("Participants:")[0] ?? '').replace(matchEventType, '');

const participantSection = props.description.split("Participants:")[1] ?? undefined;

</script>

<template>
    <CollapsibleSection :expanded="expanded" :show-border="true" class="description">
        <p v-html="audienceDesc"></p>
        <div v-if="participantSection" class="participant-info-container">
            <span class="participant-info-title">Participant Info:</span>
            <span v-html="participantSection"></span>
        </div>
    </CollapsibleSection>

</template>

<style scoped>
.participant-info-title {
    font-weight: 700;
}

.description {
    margin: 6px;
}

.participant-info-container {
    margin-top: 12px;
}
</style>
