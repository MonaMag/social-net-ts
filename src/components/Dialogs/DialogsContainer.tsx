import React, {ChangeEvent} from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";


type DialogsContainerPropsType = {
    store: Store
}

function DialogsContainer(props: DialogsContainerPropsType) {

    const SendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    const NewMessageChange = (text: string) => {
        props.store.dispatch(updateMessageBodyAC( text));
    }

    return (
        <Dialogs dialogsPage={props.store.getState().dialogsPage}
                 sendMessage={SendMessage}
                 NewMessageChange={NewMessageChange} />
    );
}

export default DialogsContainer;

