import profileReducer, {ProfileReducerActionType} from "./profile-reducer";
import dialogsReducer, {DialogsReducerActionType} from "./dialogs-reducer";


export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
   /* addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void*/
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}

/*
type AddPostActionType = ReturnType<typeof  addPostAC>
type  UpdateNewPostActionType = ReturnType<typeof  changeNewTextAC>
type  UpdateNewMessageActionType = ReturnType<typeof   updateMessageBodyAC>
type  sendMessageActionType = ReturnType<typeof  sendMessageAC>
*/

export type ActionsType = ProfileReducerActionType |  DialogsReducerActionType

export const store: StoreType= {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you?!', likesCount: 20},
                {id: 3, message: 'Hi, my dear!', likesCount: 18},
                {id: 4, message: 'Where are you!', likesCount: 25}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Hanna'},
                {id: 2, name: 'Kira'},
                {id: 3, name: 'Tim'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Anna'},
                {id: 6, name: 'Ali'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?!'},
                {id: 3, message: 'Hi, my dear!'},
                {id: 4, message: 'Where are you?'}
            ],
            newMessageBody: ''
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState()   {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}


//window.store = store;