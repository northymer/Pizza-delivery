import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Button} from '../../components/Button/Button'
import {ContainerBg} from '../../containers/ContainerBg/ContainerBg'
import {InputText} from "../../components/Form/InputText";
import { useParams } from 'react-router-dom'
import './AuthPage.scss'
import {userRegister} from "../../redux/user/actions";
import { compose } from 'ramda'
import RegisterUserContainer from "../../containers/RegisterUserContainer/RegisterUserContainer";

const AuthPage = (props) => {
    const { authMethod } = useParams()
    const isLogin = authMethod === 'login'
    const handleSubmit = (data) => {
        if (isLogin) {

        } else {
            props.userRegister(data)
        }
    }
    return (
        <div>
            <ContainerBg>
                <>
                    {isLogin
                        ? <div className="form-row form-group">
                            <div className="col-6">
                                <InputText title='Email' required name='login'/>
                            </div>
                            <div className="col-6">
                                <InputText title='Password' required name='password' type='password'/>
                            </div>
                        </div>
                        : <RegisterUserContainer onSubmit={handleSubmit} />
                    }

                </>
            </ContainerBg>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    userRegister: (data) => dispatch(userRegister(data))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AuthPage)