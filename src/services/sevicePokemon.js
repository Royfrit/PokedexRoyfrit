
import {GET_POKEMON_CARD, GET_POKEMON_IMG, GET_POKEMON_DETAILS} from '../constante'


 export const serviceApi = async () => {
    let response = await fetch(GET_POKEMON_CARD);
    if (response.ok) {
      let data = await response.json()
      const { results } = data
      const newPokemonData = {};
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `${GET_POKEMON_IMG}${
            index + 1
          }.png`,
        };
      });
      return newPokemonData
    } 
  }

  export const serviceDetail = async (pokemonId) => {
        let response = await fetch(`${GET_POKEMON_DETAILS}${pokemonId}/`);
        let data = await response.json()
        return data
    }
  