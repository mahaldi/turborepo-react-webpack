import React, {lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider, useSelector } from 'react-redux'
import {Checkpoints, meaPrefix} from 'commons/Utils'
import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from 'commons/Slices'

const LeadServiceLazy = lazy(() => import('./services/leadService'))
const OpportunityServiceLazy = lazy(() => import('./services/opportunityService'))
const history = createBrowserHistory()
const store = configureStore({ reducer: rootReducer })

const App = () => {
  
  return(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <h1>header container here</h1>

          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path={meaPrefix}>
                <OpportunityServiceLazy store={store} />
              </Route>
              <Route path={Checkpoints.home}>
                <LeadServiceLazy store={store} />
                <OpportunityServiceLazy store={store} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </Provider>
  )
}
export default App;