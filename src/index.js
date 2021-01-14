import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import {Layout, Menu } from 'antd';
import '../src/styles/pages/index.scss'
const { Header, Footer } = Layout;


const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <Layout className="layout">
      <Header className="layout__header">
        <Menu  mode="horizontal" defaultSelectedKeys={['2']}/>
      </Header>
        <App />
        <Footer className="layout__footer">Creado por Liset Trocel</Footer>
    </Layout>   
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
