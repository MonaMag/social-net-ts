import React from 'react';
import {UserPropsType} from "../../redux/users-reducer";
import s from './Users.module.css';

export type UsersType = {
    users: Array<UserPropsType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserPropsType>) => void
}

function Users(props: UsersType) {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://klike.net/uploads/posts/2019-12/1576662740_32.jpg',
                    fullName: 'Dmitry',
                    status: 'I am a  boss',
                    location: {city: 'Minsk', country: 'Belarus'},
                    followed: false,
                },
                {
                    id: 2,
                    photoUrl: 'https://klike.net/uploads/posts/2019-12/1576662740_32.jpg',
                    fullName: 'Sasha',
                    status: 'I am a  boss',
                    location: {city: 'Moscow', country: 'Russia'},
                    followed: false,
                },
                {
                    id: 3,
                    photoUrl: 'https://klike.net/uploads/posts/2019-12/1576662740_32.jpg',
                    fullName: 'Andrew',
                    status: 'I am a  boss too',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    followed: false,
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={s.wrapper}>

                    <div>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div className={s.btn}>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>

                    <div className={s.userInfo}>
                        <div className={s.userInfoPart}>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.userInfoPart}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}
    export default Users;