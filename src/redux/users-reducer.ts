import {usersAPI} from "../api/users-api";
import {AppThunkType, InferActionsTypes} from "./redux-store";
import {APIResponseType} from "../api/api";
import {Dispatch} from "react";
import {updateObjectInArray} from "../utils/object-helpers";

/*const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'mona/soc-net/user-reducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'mona/soc-net/user-reducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'mona/soc-net/user-reducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'mona/soc-net/user-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'*/

//* ================== Users reducer types ===============================================================>
export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean
}

//* ================== Initial State ====================================================================>

export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

const usersReducer = (state: UsersStateType = initialState, action: UsersReducerActionsType): UsersStateType => {
    switch (action.type) {
        case 'mona/soc-net/user-reducer/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'mona/soc-net/user-reducer/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'mona/soc-net/user-reducer/SET_USERS':
            return {...state, users: action.users}

        case 'mona/soc-net/user-reducer/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        case 'mona/soc-net/user-reducer/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}

        case 'mona/soc-net/user-reducer/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'mona/soc-net/user-reducer/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}


//* ====== Action Creators =============================================================================>

export type UsersReducerActionsType = InferActionsTypes<typeof usersActions>

export const usersActions = {
    followSuccess: (userId: number) => ({type: 'mona/soc-net/user-reducer/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'mona/soc-net/user-reducer/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'mona/soc-net/user-reducer/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'mona/soc-net/user-reducer/SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'mona/soc-net/user-reducer/SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'mona/soc-net/user-reducer/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'mona/soc-net/user-reducer/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}



//* ====== Thunk Creators ===============================================================================>
export const getUsers = (currentPage: number, pageSize: number): AppThunkType => {
    return async dispatch => {
        dispatch(usersActions.toggleIsFetching(true));
        dispatch(usersActions.setCurrentPage(currentPage));

        let data =  await usersAPI.getUsers(currentPage, pageSize)
        dispatch(usersActions.toggleIsFetching(false));
        dispatch(usersActions.setUsers(data.items));
        dispatch(usersActions.setTotalUsersCount(220));
    }
}


const followUnFollowFlow = async (dispatch: Dispatch<UsersReducerActionsType>,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<APIResponseType>,
                                  actionCreator: (userId: number) => UsersReducerActionsType) => {
    dispatch(usersActions.toggleIsFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.toggleIsFollowingProgress(false, userId))
}



export const follow = (userId: number): AppThunkType => {
    return async dispatch => {
        await followUnFollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), usersActions.followSuccess)
    }
}

export const unfollow = (userId: number): AppThunkType => {
    return async dispatch => {
       await followUnFollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), usersActions.unfollowSuccess)
    }
}

export default usersReducer;