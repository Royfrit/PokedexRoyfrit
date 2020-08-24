import React, { useEffect, useState } from "react";
import {Col, Row,Layout, Menu, Card } from 'antd';
import { toFirstCharUppercase } from "../constante";
const { Header, Content, Footer } = Layout;



const LayoutHome = (props) => {
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const { Meta } = Card;
  const [filter, setFilter] = useState("");
  // const handleSearchChange = (e) => {
  //   setFilter(e.target.value);
  // };

  useEffect(() => {
    async function serviceApi(){
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
      if (response.ok) {
        let data = await response.json()
        const { results } = data
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      } 
    }
    serviceApi();
    
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
      <Layout className="layout">
        <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        </Menu>
        </Header>
        <Content style={{ padding: '70px 70px', height: '100%'}}>
            <div className="site-card-wrapper">
            <Row gutter={16}>
                {Object.keys(pokemonData).map(
                  (pokemonId) =>
                    pokemonData[pokemonId].name.includes(filter) &&
                    getPokemonCard(pokemonId)
                )}
            </Row>
          </div>
          
          </Content>
          <Footer style={{ textAlign: 'center' }}>PokeRoyfrit</Footer>
      </Layout>   
      </>
    )
}

export default LayoutHome