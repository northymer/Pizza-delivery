import React from 'react'

import './ContainersBg.scss'

export const ContainerBg = ({children}) => {
  return (
    <div className='container'>
      <div className="container-bg">
        {children}
      </div>
    </div>
  )
}