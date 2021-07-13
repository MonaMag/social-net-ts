import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: UserProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
/*type ProfileContainerPropsType = {
    profile: UserProfileType | null
    setUserProfile: (profile: UserProfileType) => void
    userId: number
}*/
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component <ProfileContainerPropsType, AppStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2';
        }
        axios.get<UserProfileType>('https://social-network.samuraijs.com/api/1.0/profile/'+userId)
            .then(response => {
                console.log(response.data)
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter);