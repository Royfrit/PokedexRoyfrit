
import React from 'react'
import {Col, Card } from 'antd';
import { toFirstCharUppercase } from "../constante";

const GetPokemonCard = (pokemonId, pokemonData, history) => {
    const { id, name, sprite } = pokemonData.pokemonData[pokemonId.pokemonId];
    const { Meta } = Card;

    return (
      <Col span={6} key={pokemonId}  style={{padding: '50px'}}>
        <Card onClick={() => history.history.push(`/${id}`)}
          style={{padding: '40px'}}
          hoverable
          cover={<img alt="example" src={`${sprite}`} />}
          >
          <Meta description={`${id}. ${toFirstCharUppercase(name)}`} />
        </Card>
      </Col>
    );
};

export default GetPokemonCard