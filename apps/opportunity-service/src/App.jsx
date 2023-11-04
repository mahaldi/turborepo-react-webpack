import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import List from './pages/List';
import Detail from './pages/Detail';

const App = ({ history }) => (
	<Router history={history}>
		<Switch>
			<Route exact path="/" component={List} />
			<Route exact path="/mea/detail" component={Detail} />
		</Switch>
	</Router>
);
App.propTypes = {
	history: PropTypes.shape({}).isRequired,
};
export default App;
