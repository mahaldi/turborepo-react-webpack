import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider, useSelector } from 'react-redux';
import { Checkpoints, meaPrefix } from 'components/Utils';
// import TestingPage from './components/Testing.jsx'
// import {PageContext} from 'components/Context'
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'components/Slices';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './App.css';

const SaforaLazy = lazy(() => import('./components/SaforaApp'));
const MeaLazy = lazy(() => import('./components/MeaApp'));
const history = createBrowserHistory();
const store = configureStore({ reducer: rootReducer });

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

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{/* React Query DevTools: Set this true if you want the dev tools to default to being open */}
			<ReactQueryDevtools initialIsOpen={false} />
			<Provider store={store}>
				<Router history={history}>
					<div className="wrapper">
						<div className="container">
							<div className="marker background-green">Container</div>

							{/* <h1>header container here</h1> */}
							{/* <PageContext data={data} actions={actions}>
              <TestingPage />
            </PageContext> */}

							<Suspense fallback={<div>loading...</div>}>
								<Switch>
									<Route path={meaPrefix}>
										<div className="child border-blue bg-mea">
											<div className="marker background-blue">MEA</div>
											<MeaLazy />
										</div>
									</Route>
									<Route path={Checkpoints.home}>
										<div className="child border-red bg-sfa">
											<div className="marker background-red">SAFORA</div>
											<SaforaLazy store={store} client={queryClient} />
										</div>
									</Route>
								</Switch>
							</Suspense>
						</div>
					</div>
				</Router>
			</Provider>
		</QueryClientProvider>
	);
};
export default App;
