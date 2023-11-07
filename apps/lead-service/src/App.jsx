import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkpoints } from 'commons/Utils';

import List from './pages/List';
import Detail from './pages/Detail';
import EditLead from './pages/Edit';

const App = ({ history, store }) => (
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route exact path={Checkpoints.leadList} component={List} />
				<Route exact path={Checkpoints.leadDetail} component={Detail} />
				<Route exact path={Checkpoints.leadEdit} component={EditLead} />
			</Switch>
		</Router>
	</Provider>
);
App.propTypes = {
	history: PropTypes.shape({}).isRequired,
	store: PropTypes.shape({}).isRequired,
};
export default App;
