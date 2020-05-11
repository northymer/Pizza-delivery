import React from 'react'

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