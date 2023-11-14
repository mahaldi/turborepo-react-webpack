/* eslint-disable react/jsx-props-no-spreading */
import React, {useEffect} from 'react';
import { Button, Input, Form } from 'commons/Components';
import { Checkpoints } from 'commons/Utils';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost, postSelector, fetchPosts } from 'commons/Slices';
import PropTypes from 'prop-types';
import {get} from 'lodash'
import { useForm } from 'react-hook-form'

const EditOppty = (props) => {
	const {history, match} = props
	const { register, handleSubmit, formState: { errors }, setValue } = useForm()
	const id = get(match, 'params.id')
	const dispatch = useDispatch()
	const {loading: loadingPost, post: postDetail} = useSelector(postSelector)

	useEffect(() => {
		if(id)
			dispatch(fetchPost(id))
	}, [])

	useEffect(() => {
		setValue('title', postDetail.title)
		setValue('body', postDetail.body)
	}, [postDetail])

	const onSubmit = (data) => {
		if(data) {
			return dispatch(fetchPosts({})).then(res => {
				if(res)
					history.push({
						pathname: Checkpoints.opptyList
					})
			})
		}
		return null
	}

	return (
		<div>
			<h1>Page Edit oppty</h1>
			{
				loadingPost ? <h1>Loading</h1> : <div>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<h3>Title</h3>
						<Input
							register={register}
							name="title"
							validation={{
								required: 'field required'
							}}
							errors={errors}
						/>
						<h5>body</h5>
						<Input register={register} name="body" />
						<Button type="submit">Submit</Button>
					</Form>
				</div>
			}
		</div>
	)
}
EditOppty.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	match: PropTypes.shape({}).isRequired,
}
export default EditOppty
