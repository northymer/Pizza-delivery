import React from 'react'

export const Radio = (props) => {
  const {
    title = '',
    required = false,
    name = '',
    checked = () => {},
    onClick = () => {}
  } = props
  return (
    <div className="custom-control custom-radio">
      <input type="radio" className="custom-control-input" id={name}
             name="radio-stacked" required={required} checked={checked}
             onClick={onClick}/>
      <label className="custom-control-label" htmlFor={name}>{title}</label>
    </div>
  )
}