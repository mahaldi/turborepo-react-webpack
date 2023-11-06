/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Checkpoints, opptyServicePrefix } from 'commons/Utils';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'commons/Slices';
import Layout from './layout';

// const LeadServiceLazy = lazy(() => import('./services/leadService'));
const OpportunityServiceLazy = lazy(() =>
	import('./services/opportunityService')
);
const LoginLazy = lazy(() => import('./components/Login'))
const history = createBrowserHistory();
const store = configureStore({ reducer: rootReducer });

const App = () => (
	<Provider store={store}>
		<Router history={history}>
			<Layout>
				<Suspense fallback={<div>loading...</div>}>
					<Switch>
						<Route path={opptyServicePrefix} component={props => <OpportunityServiceLazy store={store} {...props} />}/>
						<Route path={Checkpoints.home} component={props => <LoginLazy store={store} {...props} />}/>
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	</Provider>
);
export default App;
