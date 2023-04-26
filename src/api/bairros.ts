import geometriasBairrosJson from './json/geometrias_bairros.json'
import populacaoBairrosJson from './json/populacao_bairros.json'
import { PopulationData } from '@/types/population';

export default {
  getNeighborhoods: function (): GeoJSON.FeatureCollection {
    return geometriasBairrosJson.data as unknown as GeoJSON.FeatureCollection
  },
  getPopulation: function (id: number): Array<PopulationData> {
    return populacaoBairrosJson.data.filter(populacao => populacao.id_geometria === id)
  }
};
