import React from 'react'

export const Button = ({children, onClick}) => {
    const handleClick = () => {
        console.log('clicked!!')
        if(onClick)
            onClick()
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}