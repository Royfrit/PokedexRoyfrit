import React from 'react';
import { toFirstCharUppercase, GET_POKEMON_IMG_FULL } from "../constante";
import { Descriptions, Button } from 'antd';
import '../styles/pages/generatePokemon.scss'

const GeneratePokemonJSX = (props) => {
    console.log(props);
    const { name, id, abilities, types, sprites, stats, base_experience } = props.pokemon;
    const fullImageUrl = `${GET_POKEMON_IMG_FULL}${id}.png`;
    return (
      <>
        <div className="PokeDescription">
          <div className="PokeDescription__DivButton">
            <Button className="PokeDescription__Button" type="primary" onClick={() => props.history.history.push('/')}>
                Back
            </Button>
          </div>
          <div className="PokeDescription__Img">
            <img className="PokeDescription__ImgDimension" src={fullImageUrl}></img>
          </div>
          <Descriptions className="PokeDescription__specs" title="Details" bordered>
            <Descriptions.Item label="Name">{toFirstCharUppercase(name)}</Descriptions.Item>
            <Descriptions.Item label="Abilities">
              {abilities.map(item => (<p>{item.ability.name}</p>))}
            </Descriptions.Item>
            <Descriptions.Item label="Type">
              {types.map(item => (<p>{item.type.name}</p>))}
            </Descriptions.Item>
            <Descriptions.Item label="Version Shiny">
              <img src={sprites.front_shiny !== '' ? sprites.front_shiny : 'No posee'}/>
            </Descriptions.Item>
            <Descriptions.Item label="Stats">
              {stats.map(item => (<p>{item.base_stat}</p>))}
            </Descriptions.Item>
            <Descriptions.Item label="Base Experience" span={3}>
              <p>{base_experience}</p>
            </Descriptions.Item>
          </Descriptions>
        </div> 
      </>
    );
  };

  export default GeneratePokemonJSX