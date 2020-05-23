import React from 'react'
import PropTypes from 'prop-types'

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

Select.propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func,
}