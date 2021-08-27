import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";




export const getUsersSelector = (state: AppStateType) => state.usersPage.users

// as an example of using createSelector:
export const selectUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true)
});


export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
