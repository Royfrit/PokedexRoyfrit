import './styles/main.scss'
import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import layoutHome from '@pages/layoutHome.jsx'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <layoutHome {...props} />} />
      </Switch>
    </Router>
  )
}

export default App
