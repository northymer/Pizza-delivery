import React, { useState } from 'react'
import {InputText} from "../../components/Form/InputText";
import {Button} from "../../components/Button/Button";

const RegisterUserContainer = ({onSubmit}) => {
    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState('')
    const [repeatPassword, changeRepeatPassword] = useState('')
    const [error, changeError] = useState(null)
    const handleSubmit = () => {
        changeError(null)
        if (password === repeatPassword) {
            onSubmit({name, email, password})
        } else {
            changeError('Passwords should match')
        }
    }
    return (
        <form>
            <div className="form-row form-group">
                <div className="col-6">
                    <InputText value={name} onChange={changeName} title='Name' type="text" required name='name'/>
                    <InputText value={email} onChange={changeEmail} title='Email' required name='email' type='email'/>
                </div>
                <div className="col-6">
                    <InputText value={password} onChange={changePassword} title='Password' required name='password' type='password'/>
                    <InputText value={repeatPassword} onChange={changeRepeatPassword} title='Repeat Password' required name='repeat_password' type='password'/>
                </div>
            </div>
            <div className='auth__button'>
                <Button onClick={handleSubmit}>Register</Button>
            </div>
            {error &&
                <div>{error}</div>
            }
        </form>
    )
}

export default RegisterUserContainer