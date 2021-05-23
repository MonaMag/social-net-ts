import {combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});


//creating state and store type
export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store

const store = createStore(rootReducer);


export default store;