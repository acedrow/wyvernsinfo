<script setup lang="ts">
import { ref } from 'vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

const SvgStrokeColor = "#e6e6e6"
const size = "30"
let expanded = ref<boolean>(false)
</script>

<template>
    <div class="row topmenu-container">

        <h1 class="main-header">wyverns.info</h1>
        <!-- <button class="menu-button" @click="expanded = !expanded"
            :title="!expanded ? 'Show Menu' : 'Hide Menu'">
            <svg viewBox="0 0 50 50" :width="size" :height="20" xmlns="http://www.w3.org/2000/svg">
                <path :fill="SvgStrokeColor"
                    d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
            </svg></button> -->
    </div>
    <CollapsibleSection class="menu" :expanded="expanded">
    
        hat is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.1
    </CollapsibleSection>
</template>

<style lang="css" scoped>
.main-header {
    margin-left: 6px;
}

.row.topmenu-container {
    width: 100%;
    background-color: var(--wyverns-green);
    justify-content: space-between;
}

.menu {
    padding: 6px;
    background-color: var(--med-gray);
}

.row.links-container {
    padding: 5px;
    padding-bottom: 0;
}

.icon-container {
    margin-right: 10px;
}

.menu-button {
    height: 41px;
    padding: 5px;
    padding-bottom: 0;
    background-color: var(--dark-green);
}
</style>