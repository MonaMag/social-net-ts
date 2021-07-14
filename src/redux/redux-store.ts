import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

//creating state and store type
export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

const store = createStore(rootReducer);
//@ts-ignore
window.store = store

export default store;