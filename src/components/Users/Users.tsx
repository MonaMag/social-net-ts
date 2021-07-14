import React from 'react';
import s from "./Users.module.css";
import usersDefaultAva from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    toggleIsFollowingProgress: (isFetching: boolean, id: number) => void
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>{pages.map(p => {
                return <span
                    className={props.currentPage === p ? s.page + ' ' + s.selectedPage : s.page}
                    onClick={() => props.onPageChanged(p)}>{p}</span>
            })}
            </div>

            {props.users.map(u =>
                <div key={u.id} className={s.wrapper}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userPhoto} alt={'user'}
                                     src={u.photos.small != null ? u.photos.small : usersDefaultAva}/>
                            </NavLink>
                        </div>

                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.btn}  onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {'API-KEY': '9b215882-6a46-48f3-ba59-705ff8d76e7b'}
                                        })
                                        .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    });
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.btn} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {'API-KEY': '9b215882-6a46-48f3-ba59-705ff8d76e7b'}
                                        })
                                        .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false, u.id)
                                    });
                                }}>Follow</button>}
                        </div>
                    </div>

                    <div className={s.userInfo}>
                        <div className={s.userInfoItem}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.userInfoItem}>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}
/*disabled={props.followingInProgress.some(id => id === u.id)}*/
export default Users;