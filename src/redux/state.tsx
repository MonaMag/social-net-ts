
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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: () => void
}


let store = {
     _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you?!', likesCount: 20},
                {id: 3, message: 'Hi, my dear!', likesCount: 18},
                {id: 4, message: 'Where are you!', likesCount: 25}
            ],
            newPostText: 'it-kamasutra.com'
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
            ]
        },

    },
    getState() {
        return this._state;
    },
    _callSubscriber (state:  RootStateType) {
        console.log('State changed')
    },
    addPost (postMessage: string) {
        let newPost: PostPropsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer: (state:RootStateType) => void) {
        this._callSubscriber = observer;
    }

}


export default store;
//window.store = store;