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
   /* addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void*/
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

/*
export type AddPostActionType ={
    type: 'ADD-POST'
    postMessage: string
}*/
/*export type UpdateNewPostActionType ={
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}*/

type AddPostActionType = ReturnType<typeof  addPostAC>
type  UpdateNewPostActionType = ReturnType<typeof  changeNewTextAC>


//export type ActionsType = AddPostActionType | UpdateNewPostActionType
// и теперь можем заменить конкотинацию след образом
export type ActionsType = ReturnType<typeof  addPostAC> | ReturnType<typeof  changeNewTextAC>


export const addPostAC = ( postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}
export const changeNewTextAC = ( postMessage: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: postMessage
    } as const
}

export const store = {
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
    _callSubscriber() {
        console.log('State changed')
    },
    getState()   {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionsType) {
        if (action.type === 'ADD-POST') {
            const newPost: PostPropsType = {
                id: 5,
                message: action.postMessage,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';


        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;

        }
        this._callSubscriber();
    }

}



//window.store = store;