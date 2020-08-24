import React, { useEffect, useState } from "react";
import { toFirstCharUppercase } from "../constante";

const Pokemon = (props) => {
    const { match, history } = props;
    const { params } = match;
    const { pokemonId } = params;
    console.log(pokemonId);
    const [pokemon, setPokemon] = useState(undefined);
    console.log(pokemon);

    useEffect(() => {
        async function serviceImg() {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
            let data = await response.json()
            console.log(data);
            setPokemon(data);
        }
        serviceImg()
      }, [pokemonId]);

      const generatePokemonJSX = (pokemon) => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;
        console.log(front_default)
        return (
          <>
           <div> {`${id}.`} {toFirstCharUppercase(name)} <img src={fullImageUrl}></img></div>
          </>
        );
      };

      return (
        <>
          {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
    
        </>
      );
}

export default Pokemon;