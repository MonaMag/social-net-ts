
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


export type UserType = {
    id: number
    name: string
    status: string
    photos: {small: string, large: string}
    followed: boolean
    /*location: { country: string, city: string }*/
}
export type initialStateType = {
    users: Array<UserType>
}

const initialState: initialStateType = {
    users: [
        /*{
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
        }*/
    ],
};

const usersReducer = (state: initialStateType = initialState, action: UsersReducerActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return  {...state, users: [ ...state.users, ...action.users]}
        }
        default:
            return state;
    }
}


//Action creators

export type UsersReducerActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const);


export default usersReducer;