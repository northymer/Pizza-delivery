import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Button} from '../../components/Button/Button'
import {ContainerBg} from '../../containers/ContainerBg/ContainerBg'
import {InputText} from "../../components/Form/InputText";
import { useParams, useHistory } from 'react-router-dom'
import './AuthPage.scss'
import {userLogin, userRegister} from "../../redux/user/actions";
import { compose } from 'ramda'
import RegisterUserContainer from "../../containers/RegisterUserContainer/RegisterUserContainer";
import LoginUserContainer from "../../containers/LoginUserContainer/LoginUserContainer";

const AuthPage = (props) => {
    const { authMethod } = useParams()
    const history = useHistory()
    const isLogin = authMethod === 'login'
    const handleSubmit = async (data) => {
        try {
            if (isLogin) {
                await props.userLogin(data)
                history.push('/')
            } else {
                await props.userRegister(data)
                history.push('/auth/login')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <ContainerBg>
                <>
                    {isLogin
                        ? <LoginUserContainer onSubmit={handleSubmit} />
                        : <RegisterUserContainer onSubmit={handleSubmit} />
                    }

                </>
            </ContainerBg>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    userRegister: (data) => dispatch(userRegister(data)),
    userLogin: (data) => dispatch(userLogin(data))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AuthPage)