import {ActionsType, DialogsPageType} from "./state";



const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

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

export type DialogsReducerActionType =  ReturnType<typeof   updateMessageBodyAC> | ReturnType<typeof  sendMessageAC>

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