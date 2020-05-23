import React from 'react'
import { useDispatch } from 'react-redux'
import { ContainerBg } from '../../containers/ContainerBg/ContainerBg'
import { useParams, useHistory } from 'react-router-dom'
import './AuthPage.scss'
import { userLogin, userRegister } from '../../redux/user/actions'
import RegisterUserContainer from '../../containers/RegisterUserContainer/RegisterUserContainer'
import LoginUserContainer from '../../containers/LoginUserContainer/LoginUserContainer'

const AuthPage = () => {
  const { authMethod } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const isLogin = authMethod === 'login'
  const handleSubmit = async (data) => {
    try {
      if (isLogin) {
        await dispatch(userLogin(data))
        history.push('/')
      } else {
        await dispatch(userRegister(data))
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

export default AuthPage