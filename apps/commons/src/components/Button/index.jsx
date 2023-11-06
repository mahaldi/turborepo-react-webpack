/* eslint-disable import/prefer-default-export */
import React from 'react'
import PropTypes from 'prop-types';
import classes from './style.scss'
// import './style.scss'

export const Button = ({children, onClick}) => {
    const handleClick = () => {
        console.log('clicked')
        if(onClick)
            onClick()
    }
    console.log('classes', classes)
    return (
        <button type='button' onClick={handleClick}>{children} tes 1</button>
    )
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}