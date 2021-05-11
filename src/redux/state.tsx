

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

type AddPostActionType = ReturnType<typeof  addPostAC>
type  UpdateNewPostActionType = ReturnType<typeof  changeNewTextAC>
export type ActionsType = ReturnType<typeof  addPostAC> | ReturnType<typeof  changeNewTextAC>



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
        if (action.type === ADD_POST) {
            const newPost: PostPropsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';



        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
        }
        this._callSubscriber();
    }
}



export const addPostAC = ( text: string) => {
    return {
        type: 'ADD-POST'
    } as const
}
export const changeNewTextAC = ( text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}

/*export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: e.currentTarget.value}
}*/


//window.store = store;