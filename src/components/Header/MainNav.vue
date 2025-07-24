<script setup lang="ts">
</script>

<template>
  <div class="row nav-container">
    <nav class="row nav-items">
      <RouterLink class="menu-item" to="/">Home</RouterLink>
      <RouterLink class="menu-item" to="/calendar">Calendar</RouterLink>
      <RouterLink class="menu-item" to="/faq">FAQ</RouterLink>
    </nav>
  </div>
</template>

<style lang="css" scoped>
.row.nav-container {
  width: 100%;
  background-color: var(--wyverns-green);
  justify-content: center;
}

.row.nav-items {
  padding: 2px 0;
  width: 500px;
  align-items: left;
}

.menu-item {
  color: #fff;
  margin-right: 15px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: var(--yellow);
  }

  transition: color 0.3s ease;
}
</style>