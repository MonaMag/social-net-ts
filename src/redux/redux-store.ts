import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, {ProfileReducerActionType} from "./profile-reducer";
import dialogsReducer, {DialogsReducerActionType} from "./dialogs-reducer";
import usersReducer, {UsersReducerActionType} from "./users-reducer";
import authReducer, {AuthReducerActionType} from "./auth-reducer";
import ThunkMiddleware, {ThunkAction} from 'redux-thunk';
import {FormAction, reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

//creating state and store type
export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type AppActionType = ProfileReducerActionType | UsersReducerActionType | DialogsReducerActionType | AuthReducerActionType | FormAction
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));
//@ts-ignore
window.store = store

export default store;