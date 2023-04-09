<template>
  <div>
    This is Landing App Component
    <ul>
      <RouterLink to="/">
        <li>Home</li>
      </RouterLink>
      <RouterLink to="/demo">
        <li>Demo</li>
      </RouterLink>
      <RouterLink to="/login">
        <li>Auth</li>
      </RouterLink>
    </ul>
  </div>
  <RouterView />
</template>

<script lang="ts">
  export default {

  }
</script>

<style scoped>

</style>
