import React from 'react'
import Header from '../../components/Header/Header'
import './Wrapper.scss'

export const Wrapper = ({children}) => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='wrapper-content'>
                {children}
            </div>
        </div>
    )
}