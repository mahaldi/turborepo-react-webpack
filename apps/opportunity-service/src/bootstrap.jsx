import React from "react";
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from "./App";

const mount = (el, { onParentNavigation, defaultHistory, initialPath, store }) => {
	const history = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath]
	})
	if (onParentNavigation) history.listen(onParentNavigation)
	ReactDom.render(
		<App history={history} store={store} />,
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
	const devRoot = document.querySelector('#opportunity-service')

	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory() })
	}
}

// eslint-disable-next-line import/prefer-default-export
export { mount }
