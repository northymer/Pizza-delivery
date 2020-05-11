import React from 'react'

export const Select = (props) => {
  const {
    title = '',
    required = false,
    name = '',
    options = [],
    onClick = () => {}
  } = props
  return (
    <>
      <label htmlFor={name}>{title}</label>
      <select className="custom-select" id={name} required={required} onClick={onClick}>
        {options.map((option, index) => {
          return (
            <option value={option.value} key={index}>{option.title}</option>
          )
        })}
      </select>
    </>
  )
}