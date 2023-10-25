import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'safora/Safora'
import {Button} from 'components/UI'

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
			safora app container
			<Button>button another dimention</Button>
			<div ref={ref} />
		</div>
	)
}
export default SaforaApp;