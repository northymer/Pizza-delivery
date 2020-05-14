import React from 'react'
import './SectionTitle.scss'

export const SectionTitle = ({title = ''}) => {
  return (
    <h1 className='title-section'>{title}</h1>
  )
}