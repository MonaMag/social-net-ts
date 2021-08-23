import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsPageType } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
    sendMessage: (newMessageBody: string) => void
    newMessageChange: (text: string) => void

}
type FormDataType = {
    newMessageText: string
}

function Dialogs(props: DialogsPropsType) {
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => (<DialogItem key={d.id} name={d.name} id={d.id}/>));
    let messagesElements = props.dialogsPage.messages
        .map(m => (<Message key={m.id} message={m.message} id={m.id}/>));
    //let newMessageBody = props.dialogsPage.newMessageBody;


    /*const onSendMessageClick = () => {props.sendMessage(newMessageBody)}
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {props.newMessageChange(e.currentTarget.value)}*/

    const onSendMessage = (formData: FormDataType) => {
        props.sendMessage(formData.newMessageText)
    }

    console.log(props.isAuth)

    if (!props.isAuth) return  <Redirect to={'/login'}/>;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div >
                <SendMessageForm onSubmit={onSendMessage}/>
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
            </div>
        </div>
    );
}


//* SendMessageForm component ---------------------------------------------------------->

const SendMessageForm = reduxForm<FormDataType>({form: 'sendMessage'})
((props: InjectedFormProps<FormDataType>) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageText'} placeholder={'new message'}/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
})

export default Dialogs;

