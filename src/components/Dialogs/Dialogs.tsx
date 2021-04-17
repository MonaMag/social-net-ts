import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';


type DialogItemPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    dialog: string
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    );
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.dialog}>{props.dialog}</div>
    );
}

function Dialogs(props: any) {

    const dialogs = [
        {id: 1, name: 'Hanna'},
        {id: 2, name: 'Kira'},
        {id: 3, name: 'Tim'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Anna'},
        {id: 6, name: 'Ali'}
    ]

    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?!'},
        {id: 3, message: 'Hi, my dear!'},
        {id: 4, message: 'Where are you?'}
    ]

    let dialogsElements = dialogs
        .map(d => (<DialogItem name={d.name} id={d.id}/>));

    let messagesElements = messages.map(m => (<Message dialog={m.message}/>));


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    );
}

export default Dialogs;