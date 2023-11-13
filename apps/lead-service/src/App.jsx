import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import PropTypes from 'prop-types';
import { Checkpoints } from 'commons/Utils';

import List from './pages/List';
import Detail from './pages/Detail';
import EditLead from './pages/Edit';

const App = ({ client, history, store }) => (
	<QueryClientProvider client={client}>
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route exact path={Checkpoints.leadList} component={List} />
					<Route exact path={Checkpoints.leadDetail} component={Detail} />
					<Route exact path={Checkpoints.leadEdit} component={EditLead} />
				</Switch>
			</Router>
		</Provider>
	</QueryClientProvider>
);
App.propTypes = {
	client: PropTypes.shape({}).isRequired,
	history: PropTypes.shape({}).isRequired,
	store: PropTypes.shape({}).isRequired,
};
export default App;
