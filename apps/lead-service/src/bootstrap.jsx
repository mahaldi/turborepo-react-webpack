import React from "react";
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from "./App";

const mount = (el, { 
	onParentNavigation, 
	defaultHistory, 
	initialPath, 
	selector, 
	store, 
	client 
}) => {
	const history = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath]
	})
	if (onParentNavigation) history.listen(onParentNavigation)
	ReactDom.render(
		<App history={history} selector={selector} store={store} client={client} />,
		el
	)
	return {
		onParentNavigation: ({ pathname: nextPathname }) => {
			const { pathname } = history.location

			if (pathname !== nextPathname) {
				history.push(nextPathname)
			}
		}
	}
}

if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#lead-service')

	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory() })
	}
}

export { mount } // eslint-disable-line