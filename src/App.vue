<script lang="ts" setup>
import { RouterView } from 'vue-router';
import NavMain from '@/components/NavMain/NavMain.vue';
</script>

<template>
  <div class="flex flex-nowrap">
    <NavMain class="basis-80 grow-0 w-10" />

    <div>
    <main class="grow m-8">
      <RouterView />
    </main>
  </div>
  </div>
</template>
