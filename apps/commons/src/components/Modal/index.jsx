/* eslint-disable import/prefer-default-export */
import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, PopupContainer } from './style'

export const Modal = props => {
	const {
		open,
		position,
		zIndex,
		display,
		children,
		padding,
		maxHeight,
		overflow,
		width,
		onClose
	} = props

	return (
		<Wrapper visible={open} position={position} zIndex={zIndex} onClick={onClose}>
			<PopupContainer
				display={display}
				padding={padding}
				maxHeight={maxHeight}
				overflow={overflow}
				width={width}
				onClick={event => event.stopPropagation()}
			>
				{children}
			</PopupContainer>
		</Wrapper>
	)
}
Modal.defaultProps = {
	zIndex: 99,
	position: 'fixed',
	display: '',
	padding: '3.2rem 3rem',
	width: 'auto',
	overflow: '',
	open: false,
	maxHeight: '',
	onClose: () => {}
}
Modal.propTypes = {
	children: PropTypes.node.isRequired,
	zIndex: PropTypes.number,
	position: PropTypes.string,
	display: PropTypes.string,
	padding: PropTypes.string,
	width: PropTypes.string,
	overflow: PropTypes.string,
	open: PropTypes.bool,
	maxHeight: PropTypes.string,
	onClose: PropTypes.func
}
