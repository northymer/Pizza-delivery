import React from 'react'
import PropTypes from 'prop-types'

export const Textarea = (props) => {
  const {
    title = '',
    required = false,
    name = '',
    placeholder = ''
  } = props
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <textarea className="form-control" id={name} placeholder={placeholder} required={required} />
    </>
  )
}

Textarea.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
}