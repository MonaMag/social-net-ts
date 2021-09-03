import React from 'react';
import s from "./Users.module.css";
import usersDefaultAva from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';


export type UserPropsType = {
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


const User = ({user, followingInProgress, follow, unfollow}: UserPropsType) => {

    return (
        <div className={s.wrapper}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userPhoto} alt={'user'}
                             src={user.photos.small != null ? user.photos.small : usersDefaultAva}/>
                    </NavLink>
                </div>

                <div>
                    {user.followed
                        ? <button className={s.btn}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => unfollow(user.id)}>
                            Unfollow</button>

                        : <button className={s.btn}
                                  disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</button>}
                </div>
            </div>

            <div className={s.userInfo}>
                <div className={s.userInfoItem}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={s.userInfoItem}>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>

        </div>
    )
}

export default User;