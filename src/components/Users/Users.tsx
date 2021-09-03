import React from 'react';
import { UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


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



const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users,  ...props}: UsersPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         key={u.id}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                        />
                    )
                }
            </div>

        </div>
    )
}

export default Users;