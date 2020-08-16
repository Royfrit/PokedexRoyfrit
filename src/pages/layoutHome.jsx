import React, { useEffect, useState } from "react";
import {Col, Row,Layout, Menu, Card } from 'antd';
import CardPoke from '@commons/Card'
import { toFirstCharUppercase } from "../constante";
const { Header, Content, Footer } = Layout;



const LayoutHome = () => {
  const [pokemonData, setPokemonData] = useState({});
  console.log(pokemonData)
  const { Meta } = Card;
  const [filter, setFilter] = useState("");
  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    async function hola(){
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
      if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
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
    hola();
    
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];

    return (
      <Col span={6} key={pokemonId}  style={{padding: '50px'}}>
        <Card
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
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>   
      </>
    )
}

export default LayoutHome