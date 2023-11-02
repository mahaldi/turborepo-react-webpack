import React, {lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider, useSelector } from 'react-redux'
import {Checkpoints, meaPrefix} from 'components/Utils'
import TestingPage from './components/Testing.jsx'
import {PageContext} from 'components/Context'
import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from 'components/Slices'

const SaforaLazy = lazy(() => import('./components/SaforaApp'))
const MeaLazy = lazy(() => import('./components/MeaApp'))
const history = createBrowserHistory()
const store = configureStore({ reducer: rootReducer })

const App = () => {
  console.log('Checkpoints', Checkpoints)
  const data = {
    name: 'mahaldi',
    gender: 'L'
  }
  const getData = () => {
    console.log('action triggered')
  }
  const actions = {
    getData
  }
  
  return(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <h1>header container here</h1>
          <PageContext data={data} actions={actions}>
            <TestingPage />
          </PageContext>

          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path={meaPrefix}>
                <MeaLazy />
              </Route>
              <Route path={Checkpoints.home}>
                <SaforaLazy />
                <MeaLazy />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </Provider>
  )
}
export default App;