import React, { useEffect, useState } from "react";
import {serviceDetail} from '../services/sevicePokemon'
import GeneratePokemonJSX from "../components/generatePokemon";

const Pokemon = (props) => {
    const { match} = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined);
    async function serviceImg() {
      let data = await serviceDetail(pokemonId)
      setPokemon(data);
    }
    useEffect(() => {
        serviceImg()
      }, [pokemonId]);


      return (
        <>
          {pokemon !== undefined && pokemon && <GeneratePokemonJSX history={props} pokemon={pokemon}/>}
        </>
      );
}

export default Pokemon;