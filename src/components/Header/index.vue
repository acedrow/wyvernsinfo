<script setup lang="ts">
import MainNav from './MainNav.vue';
</script>

<!-- TODO: add indentation to header, looks weird on mobile -->

<template>
    <div class="col header-container">
        <div class="row title-container">
            <h1 class="title">wyverns.info</h1>
        </div>
        <MainNav />
    </div>
</template>

<style lang="css" scoped>
.col.header-container {
    width: 100%;
    background-color: var(--dark-green);
    align-items: center;
    margin: 0 50px;
}

.row.title-container {
    width: 100%;
    max-width: 500px;
}

.title {
    max-width: 500px;
    margin: 2px 0 6px 5px;
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