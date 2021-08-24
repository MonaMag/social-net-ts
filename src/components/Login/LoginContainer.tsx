import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {AppStateType} from "../../redux/redux-store";
import {loginTC} from "../../redux/auth-reducer";

type MapStateType = {
    isAuth: boolean
}
type MapDispatchType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
export type LoginPropsType = MapStateType & MapDispatchType



class LoginContainer extends React.Component<LoginPropsType, AppStateType> {
    render () {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect<MapStateType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {loginTC})(LoginContainer)
