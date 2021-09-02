import {profileAPI} from "../api/profile-api";
import {AppThunkType} from "./redux-store";


const ADD_POST = 'mona/soc-net/profile-reducer/ADD-POST';
const SET_USER_PROFILE = 'mona/soc-net/profile-reducer/SET-USER-PROFILE';
const SET_USER_STATUS = 'mona/soc-net/profile-reducer/SET_USER_STATUS'
const DELETE_POST = 'mona/soc-net/profile-reducer/DELETE_POST'

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UserProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ProfileStateType = {
    posts: Array<PostPropsType>
    profile: null | UserProfileType
    status: string
}

const initialState: ProfileStateType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?!', likesCount: 20},
        {id: 3, message: 'Hi, my dear!', likesCount: 18},
        {id: 4, message: 'Where are you!', likesCount: 25}
    ],
    profile: null as null | UserProfileType,
    status: ''
};


const profileReducer = (state: ProfileStateType = initialState, action: ProfileReducerActionType): ProfileStateType  => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {id: state.posts.length + 1,
                        message: action.newPostText,
                        likesCount: 0}],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        default:
            return state;
    }
}


export type ProfileReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof setUserProfile> |  ReturnType<typeof setUserStatus> | ReturnType<typeof deletePost>

//* ====== Action Creators =====================================================================================>
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)
export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const)


//* ====== Thunk Creators ======================================================================================>

export const getUserProfile = (userId: number):  AppThunkType => async dispatch => {
    const data = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(data))
}
export const getUserStatus = (userId: number):  AppThunkType =>async dispatch => {
    const data = await profileAPI.getStatus(userId)
            dispatch(setUserStatus(data))
}
export const updateUserStatus = (status: string):  AppThunkType => async dispatch => {
    const data = await profileAPI.updateStatus(status)
            if(data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
}


export default profileReducer;