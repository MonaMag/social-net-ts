import React from 'react';
import s from "./Users.module.css";
import usersDefaultAva from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number)=> void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.page + ' ' + s.selectedPage : s.page}
                                 onClick={() => props.onPageChanged(p)}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.wrapper}>
                    <div>
                        <div>
                            <img className={s.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : usersDefaultAva}/>
                        </div>
                        <div className={s.btn}>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
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

export default Users;