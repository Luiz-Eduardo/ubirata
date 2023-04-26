<script lang="ts" setup>
import NavItem from '@/components/NavItem/NavItem.vue';
import iconHome from '@/assets/icons/icon-home.png';
import iconLocation from '@/assets/icons/icon-location.svg';
</script>

<template>
  <nav class="bg-white-100 border-r-2 border-white-300 h-screen min-w-fit max-w-max">
    <ul>
      <NavItem
        to="/"
        :icon-src="iconHome"
        icon-alt-text="Home icon"
        title="Home"
      />
      <NavItem
        to="/map/neighborhoods"
        :icon-src="iconLocation"
        icon-alt-text="A location pin"
        title="Mapa"
      />
    </ul>
  </nav>
</template>
