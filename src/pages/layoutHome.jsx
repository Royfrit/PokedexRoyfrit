import React, { useEffect, useState } from "react";
import {Col, Row, Card } from 'antd';
import { toFirstCharUppercase } from "../constante";
import {serviceApi} from "../services/sevicePokemon"

const LayoutHome = (props) => {
  const { history } = props;
 
  const [pokemonData, setPokemonData] = useState({});
  const { Meta } = Card;
  const [filter, setFilter] = useState("");
  // const handleSearchChange = (e) => {
  //   setFilter(e.target.value);
  // };

  async function getPoke() {
    let res = await serviceApi();
    setPokemonData(res);
  }
  useEffect(() => {
    getPoke()    
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];

    return (
      <Col span={6} key={pokemonId}  style={{padding: '50px'}}>
        <Card onClick={() => history.push(`/${id}`)}
          style={{padding: '40px'}}
          hoverable
          cover={<img alt="example" src={`${sprite}`} />}
          >
          <Meta description={`${id}. ${toFirstCharUppercase(name)}`} />
        </Card>
      </Col>
    );
  }; 
    return (
      <>
        <Row gutter={16} style={{margin: 0}}>
            {Object.keys(pokemonData).map(
              (pokemonId) =>
                pokemonData[pokemonId].name.includes(filter) &&
                getPokemonCard(pokemonId)
            )}
        </Row>
        
      </>
    )
}

export default LayoutHome