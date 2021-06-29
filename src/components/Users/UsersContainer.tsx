import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";

type MapStateType = {
    users: Array<UserType>
}
type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}



const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;