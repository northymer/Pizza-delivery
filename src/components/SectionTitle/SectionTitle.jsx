import React from 'react'
import PropTypes from 'prop-types'
import './SectionTitle.scss'

export const SectionTitle = ({ title = '' }) => {
  return (
    <h1 className='title-section'>{title}</h1>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
}