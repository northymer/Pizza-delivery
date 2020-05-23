import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header'
import './Wrapper.scss'

export const Wrapper = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='wrapper-content'>
        {children}
      </div>
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.array])
}