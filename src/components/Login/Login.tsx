import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


export const Login = () => {

    const handleSubmit = (formData: FormDataType) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={handleSubmit}/>
    </div>
}

//* LoginForm component ----------------------------------------

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       placeholder={"Login"}
                       component={Input}
                       validate={[required]}/>

            </div>
            <div>
                <Field name={'password'}
                       placeholder={"Password"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={"checkbox"}
                       component={Input}
                       validate={[required]}
                /> Remember me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)