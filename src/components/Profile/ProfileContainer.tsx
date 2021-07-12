import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

type ProfileContainerPropsType = {
    profile: UserProfileType | null
    setUserProfile: (profile: UserProfileType) => void
}

class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

type MapDispatchType = {
    setUserProfile: (profile: UserProfileType) => void
}
type MapStateType = {
    profile: UserProfileType | null
}
const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);