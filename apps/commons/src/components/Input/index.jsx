/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import inputStyle from './input.scss';

export const Input = (props) => {
	const {
		onChange,
		placeholder,
		disabled,
		id,
		type,
		width,
		style: styleProp,
		height,
		register,
		name,
		validation,
		errors,
	} = props;

	const hookForm = register(name, validation);

	const handleChange = (e) => {
		const {
			target: { value: targetValue },
		} = e;
		onChange(targetValue, name);
		if (register) {
			hookForm.onChange(e);
		}
	};

	const style = {
		width,
		height,
		...styleProp,
	};

	return (
		<>
			<div className={inputStyle.wrapper}>
				<input
					className={inputStyle.input}
					onChange={handleChange}
					placeholder={placeholder}
					disabled={disabled}
					id={id || name}
					type={type}
					style={style}
					name={name}
					ref={hookForm.ref}
				/>
			</div>
			{errors[name] && <span className={inputStyle.errorMsg}>{errors[name]?.message}</span>}
		</>
	);
};
Input.propTypes = {
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.oneOf(['text', 'number']),
	id: PropTypes.string,
	width: PropTypes.string,
	style: PropTypes.shape({}),
	height: PropTypes.string,
	register: PropTypes.func,
	name: PropTypes.string,
	validation: PropTypes.shape({}),
	errors: PropTypes.shape({}),
};
Input.defaultProps = {
	onChange: () => {},
	placeholder: 'Type...',
	disabled: false,
	type: 'text',
	id: null,
	width: 'auto',
	style: {},
	height: '46px',
	register: null,
	name: '',
	validation: {},
	errors: {},
};
