import React, {lazy, Suspense } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const SaforaLazy = lazy(() => import('./components/SaforaApp'))
const history = createBrowserHistory()

const App = () => {
  return(
    <Router history={history}>
      <div>
        <h1>header container here</h1>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/mea">
              <div>mea mea an</div>
            </Route>
            <Route path="/">
              <SaforaLazy />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}
export default App;