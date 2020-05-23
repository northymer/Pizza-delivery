import React from 'react'
import PropTypes from 'prop-types'

import './ContainersBg.scss'

export const ContainerBg = ({ children }) => {
  return (
    <div className='container'>
      <div className="container-bg">
        {children}
      </div>
    </div>
  )
}

ContainerBg.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.array])
}