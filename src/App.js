import React from 'react'
import './styles/main.scss'
import { Route, Switch } from "react-router-dom";
import LayoutHome from '@pages/layoutHome'
import Pokemon from '@pages/pokemon'


const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <LayoutHome {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Switch>
)
  

export default App
