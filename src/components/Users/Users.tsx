import React from 'react';
import s from "./Users.module.css";
import usersDefaultAva from "../../assets/images/user.png";
import { UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import {Paginator} from "../Paginator/Paginator";



export type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: number[]
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>{pages.map((p, index) => {
                return <span key={index} onClick={() => props.onPageChanged(p)}
                              className={props.currentPage === p ? s.page + ' ' + s.selectedPage : s.page}
                    //className={props.currentPage === p && s.selectedPage}>{p}</span>
                >{p}</span>
            })
                }
            </div>
           {/* <Paginator  totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                        currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
*/}
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
                                ? <button className={s.btn}
                                          disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => props.unfollow(u.id)}>
                                    Unfollow</button>

                                : <button  className={s.btn}
                                           disabled={props.followingInProgress.some(id => id === u.id)}
                                           onClick={() => {props.follow(u.id)}}>
                                    Follow</button>}
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