
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
}

export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

type sidebar = {}




export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'How are you?!', likesCount: 20},
            {id: 3, message: 'Hi, my dear!', likesCount: 18},
            {id: 4, message: 'Where are you!', likesCount: 25}
        ]
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

}

export  default state;