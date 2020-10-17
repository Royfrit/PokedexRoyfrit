import React from 'react';
import { toFirstCharUppercase, GET_POKEMON_IMG_FULL } from "../constante";
import { Descriptions} from 'antd';

const GeneratePokemonJSX = (pokemon) => {
    const { name, id, abilities, types, sprites, stats, base_experience } = pokemon.pokemon;
    const fullImageUrl = `${GET_POKEMON_IMG_FULL}${id}.png`;
    return (
      <>
        <div style={{ padding: '35px 75px 0 75px' }}>
          <div style={{textAlign: 'center'}}> {`${id}.`} {toFirstCharUppercase(name)} <img width= {'400'} src={fullImageUrl}></img></div>
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
          </Descriptions>
        </div> 
      </>
    );
  };

  export default GeneratePokemonJSX