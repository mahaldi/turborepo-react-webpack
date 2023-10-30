import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { mount } from 'safora/Safora'
import {Button} from 'components/UI'
import ApiCollections from '../api'
import { actions } from '../actions'
import {get} from 'lodash'

const SaforaApp = (props) => {
	const ref = useRef(null)
	const history = useHistory()
	const { state } = props
	useEffect(() => {

		const { onParentNavigation } = mount(ref.current, {
			initialPath: history.location.pathname,
			onParentNavigation: ({ pathname: nextPathname }) => {
				const { pathname } = history.location

				if (pathname !== nextPathname) {
					history.push(nextPathname)
				}
			},
			store: state
		})
		if (onParentNavigation) {
			history.listen(onParentNavigation)
		}
	}, [state])
	
	const getApiProducts = () => {
		const api = new ApiCollections(props)
		api.getProducts()
	}
	const kucing = {
		name: 'ceboi'
	}
	console.log(get(kucing, 'name'))
	console.log(get(kucing, 'age', 'none'))
	return (
		<div>
			SaforaApp
			<Button onClick={getApiProducts}>get api products</Button>
			<Link to="/mea/list">GO TO MEA service</Link>
			<div ref={ref} />
		</div>
	)
}

function mapState(state) {
	return {
		state
	}
}
SaforaApp.propTypes = {
	state: PropTypes.shape({})
}
export default connect(mapState, actions)(SaforaApp)
