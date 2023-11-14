/* eslint-disable import/prefer-default-export */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const Form = props => {
	const { onSubmit, children, disabled } = props
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true)
		if(!isSubmitting) {
			onSubmit()
			.then(() => {
				setIsSubmitting(false)
			})
		}
	}

	useEffect(() => isSubmitting, []) // this line to fix warning memory leak

	const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { disabled: isSubmitting || disabled });
    }
    return child;
  });

	return (
		<form onSubmit={handleSubmit}>
			{childrenWithProps}
		</form>
	)
}
Form.defaultProps = {
	disabled: false
}
Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool
}
