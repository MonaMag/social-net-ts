import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
profile: UserProfileType | null
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo  profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;