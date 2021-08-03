import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type DataPropsType = {
    id: number
    email: string
    login: string
}
/*export type AuthProfileType = {
    data: DataPropsType
    resultCode: number
    messages: string[]
}*/
export type initialStateType = {
    userId: number | null
    email: string | null
    login: string |null
    isAuth: boolean
}


const initialState: initialStateType = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
};

const authReducer = (state: initialStateType = initialState, action:AuthReducerActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}


//* ====== Action Creators =====================================================================================>
export type AuthReducerActionType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userId: number, login: string, email: string) => ({type: SET_USER_DATA, payload: {userId, login, email}} as const);

//* ====== Thunk Creators ======================================================================================>
export const  getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.getAuthData()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {id, login, email} = res.data.data;
                dispatch(setAuthUserData(id, login, email))
            }
        })
}

export default authReducer;