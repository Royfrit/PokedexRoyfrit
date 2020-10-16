import React, { useEffect, useState } from "react";
import { toFirstCharUppercase } from "../constante";
import { Descriptions, Badge } from 'antd';

const Pokemon = (props) => {
    const { match, history } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(undefined);

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
        const { name, id, abilities, types, sprites, stats, base_experience } = pokemon;
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        console.log(pokemon)
        return (
          <>
          <div> {`${id}.`} {toFirstCharUppercase(name)} <img src={fullImageUrl}></img></div>
          <Descriptions title="Especificaciones del Pokemón" bordered>
          <Descriptions.Item label="Nombre">{toFirstCharUppercase(name)}</Descriptions.Item>
          <Descriptions.Item label="Abilidades">
            {abilities.map(item => (<p>{item.ability.name}</p>))}
          </Descriptions.Item>
          <Descriptions.Item label="Tipo">
            {types.map(item => (<p>{item.type.name}</p>))}
          </Descriptions.Item>
          <Descriptions.Item label="Version Shiny">
            <img src={sprites.front_shiny !== '' ? sprites.front_shiny : 'No posee'}/>
          </Descriptions.Item>
          <Descriptions.Item label="Stats">
            {stats.map(item => (<p>{item.base_stat}</p>))}
          </Descriptions.Item>
          <Descriptions.Item label="Experiencia Base" span={3}>
            <p>{base_experience}</p>
          </Descriptions.Item>
        </Descriptions>,
           
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