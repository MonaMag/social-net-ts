import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


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

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));
//@ts-ignore
window.store = store

export default store;