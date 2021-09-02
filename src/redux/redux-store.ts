import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, {ProfileReducerActionType} from "./profile-reducer";
import dialogsReducer, {DialogsReducerActionType} from "./dialogs-reducer";
import usersReducer, {UsersReducerActionsType} from "./users-reducer";
import authReducer, {AuthReducerActionType} from "./auth-reducer";
import ThunkMiddleware, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form'
import {appReducer, AppReducerActionsType} from "./app-reducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

//creating state and store type
export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store

//* creating type to infer types from Actions -----------------------------------------------------------------------
// type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


export type AppActionsType = ProfileReducerActionType | UsersReducerActionsType | DialogsReducerActionType | AuthReducerActionType | AppReducerActionsType | FormAction

// export type BaseThunkType<A extends Action = Action, R = void> = ThunkAction<R, AppStateType, unknown, A>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));
//@ts-ignore
window.store = store

export default store;