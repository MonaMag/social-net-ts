import {authAPI} from "../api/auth-api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'mona/soc-net/auth-reducer/SET_USER_DATA';

export type DataPropsType = {
    id: number
    email: string
    login: string
}

export type AuthStateType = {
    userId: number | null
    email: string | null
    login: string |null
    isAuth: boolean
}

//* Initial State -------------------------------------------------------------------------->
const initialState: AuthStateType = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
};

const authReducer = (state: AuthStateType = initialState, action:AuthReducerActionType):AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.payload,
            }
        default:
            return state;
    }
}


//* Action Creators -------------------------------------------------------------------------->
export type AuthReducerActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}} as const);




//* Thunk Creators ---------------------------------------------------------------------------->

export const  getAuthUserData = ():  AppThunkType => async dispatch => {
    const data = await authAPI.getAuthData();
            if (data.resultCode === 0) {
                const {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true))
            }
}

export const  loginTC = (email: string, password: string, rememberMe: boolean):  AppThunkType => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error";
                dispatch(stopSubmit('loginForm', {_error: message}))
            }
}

export const logoutTC = ():  AppThunkType => async dispatch => {
    const data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
}

export default authReducer;