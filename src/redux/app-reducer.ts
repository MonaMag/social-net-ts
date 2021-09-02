import {getAuthUserData} from "./auth-reducer";
import {AppThunkType} from "./redux-store";
import {usersActions} from "./users-reducer";

const SET_INITIALIZED = 'mona/soc-net/app-reducer/SET_INITIALIZED'


const initialState = {
    initialized: false
}
export type AppReducerStateType = typeof initialState
export type AppReducerActionsType = ReturnType<typeof setInitialized>


export const appReducer = (state: AppReducerStateType = initialState, action: AppReducerActionsType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state
    }
}

//* Action Creators --------------------------------------------------------------------------->
export const setInitialized = (value: boolean) => ({type: SET_INITIALIZED} as const)


//* Thunk Creators --------------------------------------------------------------------------->
export const initializeApp = (): AppThunkType => dispatch => {
    dispatch(usersActions.toggleIsFetching(true));
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then( () => {
            dispatch(setInitialized(true))
            dispatch(usersActions.toggleIsFetching(false));
        })
}
