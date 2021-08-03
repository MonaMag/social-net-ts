import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type MapStateType = {
    profile: UserProfileType | null
    isAuth: boolean
}
type MapDispatchType = {
    getUserProfile: (userId: number) => Function
}

type ProfileContainerPropsType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component <ProfileContainerPropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '17907';
        }

        this.props.getUserProfile(Number(userId))
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>;

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter);