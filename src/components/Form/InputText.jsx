import React from 'react'
import PropTypes from 'prop-types'

export const InputText = (props) => {
  const {
    title = '',
    required = false,
    name = '',
    placeholder = '',
    type = 'text',
    value = '',
    onChange = () => {},
    error = ''
  } = props
  let errorClass = ''
  if (error) {
    errorClass = 'is-invalid'
  }
  return (
    <div className="form-input-text">
      <label htmlFor={name}>{title}</label>
      <input
        value={value}
        onChange={event => onChange(event)}
        type={type}
        className={`form-control validate ${errorClass}`}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      {error &&
        <div className="invalid-feedback">
          {error}
        </div>
      }
    </div>
  )
}

InputText.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}