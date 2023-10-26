import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import Landing from './pages/Landing'
import Safora from './pages/Safora'

const App = ({history, store}) => {
  return (
    <Router history={history}>
      <Switch>
          <Route exact path="/" component={props => <Landing {...props} store={store}/>}/>
          <Route exact path="/safora" component={props => <Safora {...props} store={store} />}/>
      </Switch>
  </Router>
  )
}
export default App