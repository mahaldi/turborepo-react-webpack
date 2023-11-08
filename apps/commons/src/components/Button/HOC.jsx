/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

// planning to do Ripple logic here

const ButtonHOC = (WrappedComponent) => {
	console.log('hoc compo')
	return (props) => {
		console.log('props hoc', props)
		return <WrappedComponent {...props} test="asdasd" />
	};
};

export default ButtonHOC;
