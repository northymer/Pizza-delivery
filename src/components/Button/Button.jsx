import React from 'react'
import PropTypes from 'prop-types'
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

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  link: PropTypes.string,
  disabled: PropTypes.bool,
}