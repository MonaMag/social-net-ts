import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {LoginPropsType} from "./LoginContainer";


type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

//* LoginForm component ----------------------------------------

const LoginForm =   reduxForm<LoginFormDataType>({form: 'loginForm'})
((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={"Email"}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} placeholder={"Password"}
                       component={Input} validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={"checkbox"}
                       component={Input} validate={[required]}
                /> Remember me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
})


const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: LoginFormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        < LoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login;

