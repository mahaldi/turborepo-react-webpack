import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import Landing from './pages/Landing'
import Safora from './pages/Safora'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from 'components/Slices'

const store = configureStore({ reducer: rootReducer })

const App = ({history, selector}) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
            <Route exact path="/" component={props => <Landing {...props} selector={selector} />}/>
            <Route exact path="/safora" component={props => <Safora {...props} selector={selector} />}/>
        </Switch>
    </Router>
    </Provider>
  )
}
export default App