import React, { useRef, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { mount } from 'safora/Safora';
import { useDispatch, useSelector } from 'react-redux';

const SaforaApp = ({ store, client }) => {
	const ref = useRef(null);
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		const { onParentNavigation } = mount(ref.current, {
			initialPath: history.location.pathname,
			onParentNavigation: ({ pathname: nextPathname }) => {
				const { pathname } = history.location;

				if (pathname !== nextPathname) {
					history.push(nextPathname);
				}
			},
			dispatch,
			selector: useSelector,
			store: store,
			client: client
		});
		if (onParentNavigation) {
			history.listen(onParentNavigation);
		}
	}, []);

	return (
		<div style={{ margin: '24px' }}>
			<Link to="/" className="btn background-red">
				GO TO SAFORA Home
			</Link>
			<Link to="/mea/list" className="btn background-blue">
				GO TO MEA service
			</Link>
			<div ref={ref} />
		</div>
	);
};

export default SaforaApp;
