import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus, UserProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}
type MapStateType = {
    profile: UserProfileType | null
    status: string
    authorizedUserId: number | null
}
type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type ProfileContainerPropsType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component <ProfileContainerPropsType, AppStateType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUserId ? this.props.authorizedUserId : 17907
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)

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
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
})


export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, {}, AppStateType>
    (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
//withAuthRedirect
)(ProfileContainer)