import React from 'react'

export const InputText = (props) => {
  const {
    title = '',
    required = false,
    name = '',
    placeholder = '',
    type = 'text'
  } = props
  return (
    <div className="form-input-text">
      <label htmlFor={name}>{title}</label>
      <input type={type} className="form-control" id={name} placeholder={placeholder} required={required}/>
    </div>
  )
}