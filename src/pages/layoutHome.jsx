import React, { useEffect, useState } from "react";
import {Col, Row,Layout, Menu } from 'antd';
import CardPoke from '@commons/Card'
const { Header, Content, Footer } = Layout;


const LayoutHome = () => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    async function hola(){
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=80`);
      if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let data = await response.json()
        const { results } = data
        const listPokemonsData = {}
        results.forEach((pokemon, index) => {
          listPokemonsData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
          setPokemonData(listPokemonsData)
        })
      } else {
        alert("HTTP-Error: " + response.status);
      }
    }
    hola();
    
  }, []); 
    return (
      <>
      <Layout className="layout">
        <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        </Menu>
        </Header>
        <Content style={{ padding: '50px 50px', height: '100vh'}}>
            <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <CardPoke title="Card title" bordered={false}>
                  Card content
                </CardPoke>
              </Col>
              <Col span={8}>
                <CardPoke title="Card title" bordered={false}>
                  Card content
                </CardPoke>
              </Col>
              <Col span={8}>
                <CardPoke title="Card title" bordered={false}>
                  Card content
                </CardPoke>
              </Col>
            </Row>
          </div>
          
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>   
      </>
    )
}

export default LayoutHome