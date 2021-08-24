import {Dispatch} from "redux";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

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

type initialStateType = {
    posts: Array<PostPropsType>
    profile: null | UserProfileType
    status: string
}

const initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?!', likesCount: 20},
        {id: 3, message: 'Hi, my dear!', likesCount: 18},
        {id: 4, message: 'Where are you!', likesCount: 25}
    ],
    profile: null as null | UserProfileType,
    status: ''
};


const profileReducer = (state: initialStateType = initialState, action: ProfileReducerActionType): initialStateType  => {
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
        default:
            return state;
    }
}


export type ProfileReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof setUserProfile> |  ReturnType<typeof setUserStatus>

//* ====== Action Creators =====================================================================================>
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)


//* ====== Thunk Creators ======================================================================================>

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data))
        })
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}


export default profileReducer;