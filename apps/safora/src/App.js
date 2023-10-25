import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import Landing from './pages/Landing'
import Safora from './pages/Safora'

const App = ({history}) => {
  return (
    <Router history={history}>
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/safora" component={Safora} />
      </Switch>
  </Router>
  )
}
export default App