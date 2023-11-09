/* eslint-disable react/button-has-type */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import {Link, Router} from 'react-router-dom'
// import ButtonHOC from './HOC';
import buttonStyle from './button.scss';

export const Button = ({ children, onClick, ...rest }) => {
	const {
		disabled,
		type,
		variant,
		style: styleProps,
		fullWidth,
		width,
		padding,
		fontSize,
		height,
		to,
		history
	} = rest

	const classes = []

	switch(variant) {
		case 'primary':
			classes.push(buttonStyle.primary)
			break;
		case 'outline':
			classes.push(buttonStyle.outline)
			break;
		case 'link':
			classes.push(buttonStyle.link)
			break;
		default:
			break;
	}
	const style = {
		width: fullWidth ? '100%' : width,
		padding,
		fontSize,
		height,
		...styleProps
	}

	switch(variant) {
		case 'link':
			return (
				<Router history={history}>
					<Link className={`${buttonStyle.base} ${classes}`} to={to} onClick={onClick}>
						{children}
					</Link>
				</Router>
			)
		default:
			return (
				<button
					className={`${buttonStyle.base} ${classes}`}
					disabled={disabled}
					type={type}
					onClick={onClick}
					style={style}
				>
					{children}
				</button>
			);
	}
};
Button.defaultProps = {
	variant: 'primary',
	style: {},
	disabled: false,
  id: '',
  name: '',
	type: 'button',
	fullWidth: false,
	width: 'fit-content',
	fontSize: '14px',
	padding: '0 20px',
	height: '40px',
	to: null,
	onClick: () => {},
	history: {}
}
Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
  variant: PropTypes.oneOf(['link', 'primary', 'outline', 'custom']),
	style: PropTypes.shape({}),
	disabled: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.oneOf(['button', 'submit']),
	fullWidth: PropTypes.bool,
	width: PropTypes.string,
	fontSize: PropTypes.string,
	padding: PropTypes.string,
	height: PropTypes.string,
	to: PropTypes.string,
	history: PropTypes.shape({})
};
// export const Button = ButtonHOC(ButtonComponent)
