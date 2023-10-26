import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'mea/Mea'

const SaforaApp = () => {
	const ref = useRef(null)
	const history = useHistory()

	useEffect(() => {

		const { onParentNavigation } = mount(ref.current, {
			initialPath: history.location.pathname,
			onParentNavigation: ({ pathname: nextPathname }) => {
				const { pathname } = history.location

				if (pathname !== nextPathname) {
					history.push(nextPathname)
				}
			}
		})
		if (onParentNavigation) {
			history.listen(onParentNavigation)
		}
	}, [])
	return (
		<div>
			<h1>MeaApp</h1>
			<div ref={ref} />
		</div>
	)
}
export default SaforaApp;