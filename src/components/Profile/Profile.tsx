import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostPropsType} from "../../index";

type PropsType = {
    posts: Array<PostPropsType>
}

function Profile(props: PropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;