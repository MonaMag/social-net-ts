import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, {ProfileReducerActionType} from "./profile-reducer";
import dialogsReducer, {DialogsReducerActionType} from "./dialogs-reducer";
import usersReducer, {UsersReducerActionType} from "./users-reducer";
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
export type AppActionType = ProfileReducerActionType | UsersReducerActionType | DialogsReducerActionType | AuthReducerActionType | AppReducerActionsType | FormAction
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionType>

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));
//@ts-ignore
window.store = store

export default store;