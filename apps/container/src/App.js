import React, {lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import initialState from './redux/initialState'
import {Checkpoints, meaPrefix} from 'components/Utils'

const SaforaLazy = lazy(() => import('./components/SaforaApp'))
const MeaLazy = lazy(() => import('./components/MeaApp'))
const history = createBrowserHistory()
const store = configureStore(initialState)

const App = () => {
  console.log('Checkpoints', Checkpoints)
  return(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <h1>header container here</h1>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path={meaPrefix}>
                <MeaLazy />
              </Route>
              <Route path={Checkpoints.home}>
                <SaforaLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </Provider>
  )
}
export default App;