const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    message: string
}

export type initialStateType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}
const  initialState: initialStateType = {
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
}

//export type DialogsPageStateType = typeof initialState

const dialogsReducer = (state: initialStateType = initialState , action: DialogsReducerActionType): initialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            state.messages.push({id: 6, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

//Action creators

export type DialogsReducerActionType = ReturnType<typeof updateMessageBodyAC> | ReturnType<typeof sendMessageAC>

export const updateMessageBodyAC = ( body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
export const sendMessageAC = () => ({type: SEND_MESSAGE, } as const)



export default dialogsReducer;