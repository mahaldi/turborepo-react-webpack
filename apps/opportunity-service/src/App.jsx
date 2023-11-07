import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Checkpoints } from 'commons/Utils';
import { Provider } from 'react-redux'

import List from './pages/List';
import Detail from './pages/Detail';
import EditOppty from './pages/Edit';

const App = ({ history, store }) => (
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route exact path={Checkpoints.opptyList} component={List} />
				<Route exact path={Checkpoints.opptyDetail} component={Detail} />
				<Route exact path={Checkpoints.opptyEdit} component={EditOppty} />
			</Switch>
		</Router>
	</Provider>
);
App.propTypes = {
	history: PropTypes.shape({}).isRequired,
	store: PropTypes.shape({}).isRequired,
};
export default App;
