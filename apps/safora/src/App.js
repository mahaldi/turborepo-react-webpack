import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Landing from './pages/Landing';
import Safora from './pages/Safora';
import DetailPost from './pages/DetailPost';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';

const App = ({ history, selector, store, client }) => {
	const getHomeComponent = (props) => {
		// console.log('getHomeComponent');
		// console.log('getHomeComponent props: ', props);
		// console.log('getHomeComponent store: ', store);
		return <Landing {...props} selector={selector} client={client} />;
	};

	const getDetailPage = (props) => {
		return <DetailPost {...props} selector={selector} client={client} />;
	};

	return (
		<QueryClientProvider client={client}>
			<Provider store={store}>
				<Router history={history}>
					<Switch>
						<Route exact path="/" component={getHomeComponent} />
						<Route exact path="/safora/post/:postId" component={getDetailPage} />
						<Route exact path="/safora" component={(props) => <Safora {...props} selector={selector} />} />
					</Switch>
				</Router>
			</Provider>
		</QueryClientProvider>
	);
};
export default App;
