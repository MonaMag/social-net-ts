import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus, UserProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type MapStateType = {
    profile: UserProfileType | null
    status: string
}
type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type ProfileContainerPropsType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component <ProfileContainerPropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '17907';
        }
        this.props.getUserProfile(Number(userId))
        this.props.getUserStatus(Number(userId))
    }

    render() {
        return <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateUserStatus = {this.props.updateUserStatus}
                />
    }
}


const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, {}, AppStateType>
    (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
//withAuthRedirect
)(ProfileContainer)