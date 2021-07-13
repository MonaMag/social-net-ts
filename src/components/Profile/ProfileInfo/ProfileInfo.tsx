import React from 'react';
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";


type ProfileInfoPropsType = {
    profile: UserProfileType | null
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<img src='https://www.thinkingbusinessblog.com/wp-content/uploads/2014/12/step-up-1000x430.jpg'/>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>

            </div>
        </div>
    );
}

export default ProfileInfo;