import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type MapStateType = {
    profile: UserProfileType | null
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
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.profilePage.profile,
})

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default withAuthRedirect(connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {getUserProfile})(ProfileContainerWithRouter));