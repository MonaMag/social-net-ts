import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
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

type MapStatePropsType = {
    login: string | null
    email: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number, login: string, email: string) => void
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<GetAuthUsersRequestType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email)
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});
export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);