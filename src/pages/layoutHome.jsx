import React, { useEffect, useState } from "react";
import {Col, Row, Card, Typography, Input  } from 'antd';
import { toFirstCharUppercase } from "../constante";
import {serviceApi} from "../services/sevicePokemon"
import '@styles/pages/layoutHome.scss'

const LayoutHome = (props) => {
  const { history } = props;
  const { Text } = Typography;
  const [pokemonData, setPokemonData] = useState({});
  const { Meta } = Card;
  const [filter, setFilter] = useState("");
  const { Search } = Input;
  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

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
        <Col xs={{ span: 26}} md={{ span: 10}} lg={{ span: 6}} key={pokemonId}  className="CardPokemon">
          <Card onClick={() => history.push(`/${id}`)}
            className="CardPokemon__CardImg"
            hoverable
            cover={<img alt="example" src={`${sprite}`} />}
            >
            <Meta 
            className="CardPokemon__CardTitle" 
            description={<Text strong>{`${id}. ${toFirstCharUppercase(name)}`}</Text>}/>
            
          </Card>
        </Col>
    );
  }; 
    return (
      <>
      <div className="Search">
        <Search
          placeholder="search pokemon"
          onChange={handleSearchChange}
          style={{ width: 200 }}
        />

        <Row gutter={16} style={{margin: 0}}>
            {Object.keys(pokemonData).map(
              (pokemonId) =>
                pokemonData[pokemonId].name.includes(filter) &&
                getPokemonCard(pokemonId)
            )}
        </Row>
      </div>  
      </>
    )
}

export default LayoutHome