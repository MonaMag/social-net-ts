import {Dispatch} from "redux";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    newPostText: string
    profile: null | UserProfileType
}

const initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you?!', likesCount: 20},
        {id: 3, message: 'Hi, my dear!', likesCount: 18},
        {id: 4, message: 'Where are you!', likesCount: 25}
    ],
    newPostText: '',
    profile: null as null | UserProfileType
};


const profileReducer = (state: initialStateType = initialState, action: ProfileReducerActionType): initialStateType  => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostPropsType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}


export type ProfileReducerActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostText> | ReturnType<typeof setUserProfile>

//* ====== Action Creators =====================================================================================>
export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)


//* ====== Thunk Creators ======================================================================================>

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}
export default profileReducer;