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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

type GetUsersRequestType = {
    items: UserType[]
    error: string
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get<GetUsersRequestType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(100);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get<GetUsersRequestType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);

            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.page + ' ' + s.selectedPage : s.page}
                                     onClick={() => this.onPageChanged(p)}
                        >{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id} className={s.wrapper}>

                        <div>
                            <div>
                                <img className={s.userPhoto}
                                     src={u.photos.small != null ? u.photos.small : usersDefaultAva}/>
                            </div>
                            <div className={s.btn}>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}

export default Users;