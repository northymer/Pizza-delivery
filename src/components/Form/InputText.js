import React from 'react'

export const InputText = (props) => {
  const {
    title = '',
    required = false,
    name = '',
    placeholder = '',
    type = 'text',
    value = '',
    onChange = () => {},
  } = props
  return (
    <div className="form-input-text">
      <label htmlFor={name}>{title}</label>
      <input
          value={value}
          onChange={event => onChange(event)}
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
      />
    </div>
  )
}