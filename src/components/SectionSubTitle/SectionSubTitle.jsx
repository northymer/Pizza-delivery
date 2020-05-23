import React from 'react'
import PropTypes from 'prop-types'
import './SectionSubTitle.scss'

export const SectionSubTitle = ({ title }) => {
  return (
    <h2 className='title-section-min'>{title}</h2>
  )
}

SectionSubTitle.propTypes = {
  title: PropTypes.string,
}