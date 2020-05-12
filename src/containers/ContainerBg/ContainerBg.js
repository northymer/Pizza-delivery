import React from 'react'

import './ContainersBg.scss'

export const ContainerBg = ({children, className}) => {
  return (
    <div className='container'>
      <div className="container-bg">
        {children}
      </div>
    </div>
  )
}