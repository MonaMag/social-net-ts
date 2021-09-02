import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {LoginPropsType} from "./LoginContainer";
import s from './../common/FormsControls/FormsControls.module.css'


type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormKeysType = keyof LoginFormDataType
//* LoginForm component ----------------------------------------

const LoginForm = reduxForm<LoginFormDataType>({form: 'loginForm'})
(({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormKeysType>('Email', 'email', [required], Input)}
            {createField<LoginFormKeysType>('Password', 'password', [required], Input, {type: 'password'})}
            {createField<LoginFormKeysType>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
})

//* Login component ---------------------------------------------

const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        < LoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login;

