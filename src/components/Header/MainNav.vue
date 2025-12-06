<script setup lang="ts">

</script>

<template>
  <div class="row nav-container">
    <nav class="row nav-items">
      <RouterLink class="menu-item" to="/">Home</RouterLink>
      <RouterLink class="menu-item" to="/calendar">Calendar</RouterLink>
      <RouterLink class="menu-item" to="/faq">FAQ</RouterLink>
      <RouterLink class="menu-item" to="/newmembers">New Members</RouterLink>
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
  padding: 2px 0 2px 5px;
  width: 500px;
  align-items: flex-start;
}

.menu-item {
  color: #fff;
  font-size: 17px;
  margin-right: 25px;
  @media (max-width: 500px) {
    font-size: 15px;
    margin-right: 18px;
  }
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: var(--yellow);
  }

  transition: color 0.3s ease;
}
</style>