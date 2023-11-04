/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Landing from './pages/Landing'
import Safora from './pages/Safora'

const App = ({history, store}) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
          <Route exact path="/" component={props => <Landing {...props} />}/>
          <Route exact path="/safora" component={props => <Safora {...props} />}/>
      </Switch>
  </Router>
  </Provider>
)
App.propTypes = {
  history: PropTypes.shape({}).isRequired,
  store: PropTypes.shape({}).isRequired,
}
export default App