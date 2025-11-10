import { Pais } from "../interfaces/pais";
import { RESTPaises } from "../interfaces/rest-paises";

export class PaisMapper {

  static mapRestPaisToPais(restPais: RESTPaises): Pais{
    return {
      cca2: restPais.cca2,
      escudo: restPais.coatOfArms.svg ?? 'N/A',
      bandera: restPais.flags.svg,
      nombre: restPais.translations['spa'].common ?? 'No hay nombre en español',
      capital: restPais.capital?.join(','),
      poblacion: restPais.population,
      region: restPais.region,
      subregion: restPais.subregion
    }
  }

  static mapRestPaisArrayToPaisArray(restPaises: RESTPaises[]): Pais[]{
    return restPaises.map(this.mapRestPaisToPais);
  }
}
