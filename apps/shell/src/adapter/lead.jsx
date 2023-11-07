import React, { useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { mount } from 'leadService/bootstrap'
import {get} from 'lodash'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {fetchComments, commentsSelector} from 'commons/Slices'

const LeadService = ({store}) => {
	const ref = useRef(null)
	const history = useHistory()
	const dispatch = useDispatch()
	const {
	  comments,
	//   loading: commentsLoading,
	//   error: commentsHasErrors,
	} = useSelector(commentsSelector)
	useSelector(state => {
		console.log('all state', state)
	})
	console.log('comments', comments)

	useEffect(() => {
		dispatch(fetchComments(1))
	}, [dispatch])

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

	const kucing = {
		name: 'ceboi'
	}
	console.log(get(kucing, 'name'))
	console.log(get(kucing, 'age', 'none'))
	return (
		<div>
			SaforaApp
			total comments: {comments.length}
			<br />
			{/* <Button onClick={getApiProducts}>get api products</Button> */}
			<Link to="/mea/list">GO TO MEA service</Link>
			<div ref={ref} />
		</div>
	)
}
LeadService.propTypes = {
	store: PropTypes.shape({}).isRequired
}
export default LeadService
