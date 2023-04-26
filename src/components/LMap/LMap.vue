<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default defineComponent({
  name: 'LMap',
  props: {
    data: {
      type: Object,
      default: () => ({} as GeoJSON.FeatureCollection)
    }
  },
  emits: ['click'],
  setup (props, context) {
    let map = null as unknown as L.Map

    onMounted(() => {
      createMapLayer()
    })

    onBeforeUnmount(() => {
      if (map) {
        map.remove()
      }
    })

    const createMapLayer = () => {
      map = L.map('map-container')

      setPane(map)
      setTile(map)
      setLayers(map)
    }

    const setPane = (map: L.Map) => {
      map.createPane('bairros');
      map.getPane('bairros')!.style.zIndex = '650';
      map.getPane('bairros')!.style.pointerEvents = 'none';
    }

    const setTile = (map: L.Map) => {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '©OpenStreetMap, ©CartoDB'
      }).addTo(map);
    }

    const setLayers = (map: L.Map) => {
      const geojson = L.geoJson(props.data.features).addTo(map);

      geojson.on('click', ({ layer }) => {
        const { id, name, setor, zona } = layer.feature.properties

        context.emit('click', { id, name, setor, zona })
      })

      map.fitBounds(geojson.getBounds());
    }
  }
})
</script>

<template>
  <div class="flex">
      <div id="map-container" class="w-screen"/>
    </div>
</template>

<style scoped>
#map-container {
  height: calc(100vh - 50px);
  z-index: 10;
}
</style>
