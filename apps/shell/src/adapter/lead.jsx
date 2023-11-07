import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'leadService/bootstrap'
import PropTypes from 'prop-types'

const LeadService = ({store}) => {
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
			},
			store
		})
		if (onParentNavigation) {
			history.listen(onParentNavigation)
		}
	}, [])

	return <div ref={ref} />
}
LeadService.propTypes = {
	store: PropTypes.shape({}).isRequired
}
export default LeadService
