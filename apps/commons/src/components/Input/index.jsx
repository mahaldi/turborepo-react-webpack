
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import inputStyle from './input.scss'

export const Input = props => {
	const {
		onChange,
		name,
		placeholder,
		disabled,
		id,
		value,
		type,
		width,
		style: styleProp,
		defaultValue,
		height
	} = props

	const handleChange = e => {
    const { target: { value: targetValue } } = e
    onChange(targetValue, name)
	}

	const style = {
		width,
		height,
		...styleProp
	}

	return (
		<div className={inputStyle.wrapper}>
			<input
				className={inputStyle.input}
				name={name}
				onChange={handleChange}
				placeholder={placeholder}
				disabled={disabled}
				id={id}
				value={value}
				type={type}
				style={style}
				defaultValue={defaultValue}
			/>
		</div>
	)
}
Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
	id: PropTypes.string,
	width: PropTypes.string,
	style: PropTypes.shape({}),
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.string
}
Input.defaultProps = {
	onChange: () => {},
	placeholder: 'Type...',
	disabled: false,
	value: null,
	name: null,
	type: 'text',
	id: null,
	width: 'auto',
	style: {},
	defaultValue: null,
	height: '46px'
}
