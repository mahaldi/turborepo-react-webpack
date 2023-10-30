import React, {lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import initialState from './redux/initialState'
// import {Checkpoints, meaPrefix} from 'components/Utils'
import TestingPage from './components/Testing.jsx'
// import {PageContext} from 'components/Context'
// import {test} from 'components/Test'

const SaforaLazy = lazy(() => import('./components/SaforaApp'))
const MeaLazy = lazy(() => import('./components/MeaApp'))
const history = createBrowserHistory()
const store = configureStore(initialState)

const App = () => {
  // console.log('Checkpoints', Checkpoints)
  // const data = {
  //   name: 'mahaldi',
  //   gender: 'L'
  // }
  // const getData = () => {
  //   console.log('action triggered')
  // }
  // const actions = {
  //   getData
  // }
  // console.log('test', test)
  return(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <h1>header container here</h1>
          {/* <PageContext data={data} actions={actions}> */}
            <TestingPage />
          {/* </PageContext> */}

          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path="/mea">
                <MeaLazy />
              </Route>
              <Route path="/">
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