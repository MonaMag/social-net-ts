
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


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
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
   /* addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void*/
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsType) => void
}

/*
type AddPostActionType = ReturnType<typeof  addPostAC>
type  UpdateNewPostActionType = ReturnType<typeof  changeNewTextAC>
type  UpdateNewMessageActionType = ReturnType<typeof   updateMessageBodyAC>
type  sendMessageActionType = ReturnType<typeof  sendMessageAC>
*/

export type ActionsType = ReturnType<typeof  addPostAC> | ReturnType<typeof  changeNewPostTextAC> |  ReturnType<typeof   updateMessageBodyAC> | ReturnType<typeof  sendMessageAC>

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
        if (action.type === ADD_POST) {
            const newPost: PostPropsType = {
                id: this._state.profilePage.posts.length+1,
                message: this._state.profilePage.newPostText,
                likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)

        } else if(action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const changeNewPostTextAC = ( text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export const updateMessageBodyAC = ( body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}


//window.store = store;