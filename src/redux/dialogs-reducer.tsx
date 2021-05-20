import {ActionsType, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const  initialState = {
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

const dialogsReducer = (state: DialogsPageType = initialState , action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: 6, message: body});
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }

    /* if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.dialogsPage.newMessageBody = action.body;

    } else if(action.type === SEND_MESSAGE) {
        let body = state.dialogsPage.newMessageBody;
        state.dialogsPage.messages.push({id: 6, message: body});
        state.dialogsPage.newMessageBody = '';
    }
    return state;*/
}

export type DialogsReducerActionType = ReturnType<typeof updateMessageBodyAC> | ReturnType<typeof sendMessageAC>

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

export default dialogsReducer;