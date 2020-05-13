import React, { useState } from 'react'
import {InputText} from "../../components/Form/InputText";
import {Button} from "../../components/Button/Button";

const LoginUserContainer = ({onSubmit}) => {
    const [form, changeForm] = useState({
        login: '',
        password: '',
    })
    const {login, password} = form
    const [error, changeError] = useState(null)
    const handleChange = (event) => {
        changeForm({...form, [event.target.name]: event.target.value})
    }
    const handleSubmit = () => {
        changeError(null)
        onSubmit({email: login, password})
    }
    return (
        <form>
            <div className="form-row form-group">
                <div className="col-6">
                    <InputText title='Email' value={login} onChange={handleChange} required name='login'/>
                </div>
                <div className="col-6">
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

export default LoginUserContainer