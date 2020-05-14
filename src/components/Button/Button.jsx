import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom'

export const Button = (props) => {
    const {
        type = 'button',
        children,
        onClick = () => {},
        onSubmit = () => {},
        className = '',
        link,
        disabled = false
    } = props
    if (link) {
        return (
            <Link to={link} className={`button ${className}`}>
                {children}
            </Link>
        )
    }
    return (
        <button
            type={type}
            className={`button ${className}`}
            onClick={onClick}
            onSubmit={onSubmit}
            disabled={disabled}
        >
            {children}
        </button>
    )
}