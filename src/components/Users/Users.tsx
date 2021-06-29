import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css';
import axios from "axios";
import usersDefaultAva from '../../assets/images/user.png';

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

type GetUserRequestType = {
    items: UserType[]
    totalCount: number
    error: string
}

function Users(props: UsersPropsType) {

    if (props.users.length === 0) {
        axios.get<GetUserRequestType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={s.wrapper}>

                    <div>
                        <div>
                            <img className={s.userPhoto}
                                 src={u.photos.small != null ? u.photos.small : usersDefaultAva} />
                        </div>
                        <div className={s.btn}>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>

                    <div className={s.userInfo}>
                        <div className={s.userInfoPart}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.userInfoPart}>
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