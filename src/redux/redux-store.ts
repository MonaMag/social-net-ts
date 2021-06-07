import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

//creating state and store type
export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

const store = createStore(rootReducer);


export default store;