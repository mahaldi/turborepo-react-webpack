import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import List from './pages/List'
import Detail from './pages/Detail'

const App = ({history}) => {
  return (
    <Router history={history}>
      <Switch>
          <Route exact path="/mea/list" component={List} />
          <Route exact path="/mea/detail" component={Detail} />
      </Switch>
  </Router>
  )
}
export default App