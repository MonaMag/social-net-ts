import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, DialogsPageType} from "../../redux/state";
import {sendMessageAC, updateMessageBodyAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));
    let messagesElements = props.dialogsPage.messages.map(m => (<Message key={m.id} message={m.message} id={m.id}/>));
    let newMessageBody = props.dialogsPage.newMessageBody;


    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageBodyAC(e.target.value));
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    <div>{messagesElements}</div>

                    <div className={s.newMessage}>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='Enter your message'/></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

