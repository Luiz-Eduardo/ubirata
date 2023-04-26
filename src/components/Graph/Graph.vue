<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ApexCharts from 'apexcharts';
import { PopulationData } from '@/types/population';

export default defineComponent({
  name: 'Graph',
  props: {
    population: {
      type: Array as PropType<Array<PopulationData>>,
      required: true
    }
  },
  components: {
    ApexCharts
  },
  setup (props) {
    const state = ref({
      options: {},
      series: [{
        name: '',
        data: [] as Array<Number>
      }],
      visible: false
    })

    onMounted(() => {
      const x = props.population.map(entry => entry.ano)
      const y = props.population.map(entry => entry.populacao)

      state.value.options = {
        chart: {
          id: 'population-bar'
        },
        xaxis: {
          categories: x
        },
        title: {
          text: 'Evolução populacional'
        }
      }

      state.value.series = [{
        name: 'População',
        data: y
      }]

      state.value.visible = true
    })

    return {
      state
    }
  }
})
</script>

<template>
  <apexchart
    v-if="state.visible"
    width="500"
    type="bar"
    :series="state.series"
    :options="state.options"
  />
</template>

