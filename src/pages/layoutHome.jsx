import React, {useEffect, useState} from 'react'
import {Col, Row,Layout, Menu } from 'antd';
import CardPoke from '@commons/Card'
const { Header, Content, Footer } = Layout;

const layoutHome = () => {
    return (
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
    )
}

export default layoutHome