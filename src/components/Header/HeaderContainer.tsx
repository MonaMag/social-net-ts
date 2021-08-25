import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


export type DataPropsType = {
    id: number
    email: string
    login: string
}
type GetAuthUsersRequestType = {
    data: DataPropsType
    resultCode: number
    messages: string[]
}
type MapStateType = {
    login: string | null
    email: string | null
    isAuth: boolean
}
type MapDispatchType = {
    //getAuthUserData: () => void
    logoutTC: () => void
}
export type HeaderContainerPropsType = MapStateType & MapDispatchType


class HeaderContainer extends React.Component <HeaderContainerPropsType, AppStateType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps,
    {logoutTC
})(HeaderContainer);