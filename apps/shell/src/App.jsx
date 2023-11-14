import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Checkpoints, opptyServicePrefix, leadServicePrefix } from 'commons/Utils';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'commons/Slices';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components'
import { theme } from 'commons/Theme'

import Layout from './layout';

const LeadServiceLazy = lazy(() => import('./adapter/lead'));
const OpportunityServiceLazy = lazy(() =>
	import('./adapter/opportunity')
);
const LoginLazy = lazy(() => import('./components/Login'))

const client = new QueryClient();
const history = createBrowserHistory();
const store = configureStore({ reducer: rootReducer });

const App = () => (
	<QueryClientProvider client={client}>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router history={history}>
					<Layout>
						<Suspense fallback={<div>loading...</div>}>
							<Switch>
								<Route path={leadServicePrefix}>
									<LeadServiceLazy store={store} client={client} />
								</Route>
								<Route path={opptyServicePrefix}>
									<OpportunityServiceLazy store={store} client={client} />
								</Route>
								<Route path={Checkpoints.home} component={LoginLazy}/>
							</Switch>
						</Suspense>
					</Layout>
				</Router>
			</ThemeProvider>
		</Provider>
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);
export default App;
