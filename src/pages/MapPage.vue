<script lang="ts" setup>
import { ref, computed } from 'vue';
import LMap from '@/components/LMap/LMap.vue';
import Modal from '@/components/Modal/Modal.vue';
import Card from '@/components/Card/Card.vue'
import Graph from '@/components/Graph/Graph.vue';
import { bairros } from '@/api';
import { PopulationData } from '@/types/population';

const data = ref<GeoJSON.FeatureCollection | {}>({});

const generalState = ref({
  population: [] as Array<PopulationData>,
})

const graphState = ref({
  key: 0
})

const modalState = ref({
  visible: false,
  id: 0,
  name: '',
  setor: '',
  zona: ''
})

onMounted(() => {
  const neighborhoods = bairros.getNeighborhoods()

  setGeoJsonObject(neighborhoods)
})

const setGeoJsonObject = (neighborhoods: GeoJSON.FeatureCollection) => {
  data.value = neighborhoods
}

const hasGeoJson = computed(() => {
  return Object.keys(data.value).length > 0
})

const hasPopulation = computed(() => {
  return generalState.value.population.length > 0
})

const openModal = ({ id, name, setor, zona }: {
  id: number,
  name: string,
  setor: string,
  zona: string
}) => {
  const key = modalState.value.id !== id ? graphState.value.key + 1 : graphState.value.key;
  const population = bairros.getPopulation(id);

  modalState.value = {
    visible: true,
    id,
    name,
    setor,
    zona
  }

  graphState.value.key = key;
  generalState.value.population = population;
}
</script>

<template>
  <l-map
    v-if="hasGeoJson"
    :data="data"
    @click="openModal"
  />

  <Modal
    :visible="modalState.visible"
    :header="modalState.name"
    :sub-header="`Setor ${modalState.setor} / Zona ${modalState.zona}`"
    close-button-aria-label="Fechar modal"
    @close="modalState.visible = false"
  >
    <Card
      v-if="hasPopulation"
      :population="generalState.population"
      class="my-2 text-white bg-sky-500 rounded-xl min-h-[100px] p-6 mb-4"
    />

    <Graph
      v-if="hasPopulation"
      :population="generalState.population"
      :key="graphState.key"
    />
  </Modal>
</template>
