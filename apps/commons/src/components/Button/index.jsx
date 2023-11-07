/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.scss';

export const Button = ({ children, onClick, ...rest }) => {
	const { disabled } = rest
	const handleClick = () => {
		if (onClick) onClick();
	};
	return (
		<button className={classes.button} disabled={disabled} type="button" onClick={handleClick}>
			{children}
		</button>
	);
};
Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
};
