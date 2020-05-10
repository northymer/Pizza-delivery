import React from 'react'
import Header from "../../components/Header/Header";
import './Wrapper.scss'

export const Wrapper = ({children}) => {
    return (
        <React.Fragment>
            <Header />
            <div className='wrapper-content'>
                {children}
            </div>
        </React.Fragment>
    )
}