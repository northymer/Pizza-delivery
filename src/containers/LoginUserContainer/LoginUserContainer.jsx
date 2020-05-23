import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { InputText } from '../../components/Form/InputText'
import { Button } from '../../components/Button/Button'

const LoginUserContainer = ({ onSubmit }) => {
  const [form, changeForm] = useState({
    login: '',
    password: '',
  })
  const { login, password } = form
  const [error, changeError] = useState(null)
  const handleChange = (event) => {
    changeForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleSubmit = () => {
    changeError(null)
    onSubmit({ email: login, password })
  }
  return (
    <form>
      <div className="form-row">
        <div className="col-sm-6 form-group">
          <InputText title='Email' value={login} onChange={handleChange} required name='login'/>
        </div>
        <div className="col-sm-6 form-group">
          <InputText title='Password' value={password} onChange={handleChange} required name='password' type='password'/>
        </div>
      </div>
      <div className='auth__button'>
        <Button onClick={handleSubmit}>Login</Button>
      </div>
      {error &&
      <div>{error}</div>
      }
    </form>
  )
}

LoginUserContainer.propTypes = {
  onSubmit: PropTypes.func,
}

export default LoginUserContainer