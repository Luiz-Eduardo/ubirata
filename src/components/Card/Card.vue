<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PopulationData } from '@/types/population';

export default defineComponent({
  name: 'Card',
  props: {
    population: {
      type: Array as PropType<Array<PopulationData>>,
      required: true
    }
  },
  setup(props) {
    const LAST_INDEX = props.population.length -1;

    return { LAST_INDEX }
  }
})
</script>

<template>
  <div class="card">
    <p class="text-3xl">{{ population[LAST_INDEX].populacao }}</p>
    <p class="text-sm">População em {{ population[LAST_INDEX].ano}}</p>
  </div>
</template>

