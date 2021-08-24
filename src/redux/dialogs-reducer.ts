const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>

}
export type initialStateType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>

}
const initialState: initialStateType = {
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
}
//export type DialogsPageStateType = typeof initialState


const dialogsReducer = (state: initialStateType = initialState, action: DialogsReducerActionType): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

//* Action creators --------------------------------------------------------------->

export type DialogsReducerActionType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)


export default dialogsReducer;