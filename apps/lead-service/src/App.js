import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import Landing from './pages/Landing'
import Safora from './pages/Safora'
import { Provider } from 'react-redux'

const App = ({history, store}) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={props => <Landing {...props} />}/>
            <Route exact path="/safora" component={props => <Safora {...props} />}/>
        </Switch>
    </Router>
    </Provider>
  )
}
export default App