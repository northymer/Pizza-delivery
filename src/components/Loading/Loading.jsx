import React from 'react'
import {ContainerBg} from '../../containers/ContainerBg/ContainerBg'

export const Loading = () => {
  return (
    <div className='loading'>
      <ContainerBg>
        <p>Loading</p>
      </ContainerBg>
    </div>
  )
}