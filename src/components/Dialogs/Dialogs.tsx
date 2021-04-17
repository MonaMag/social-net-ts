import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';


type DialogItemPropsType = {
    name: string
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    );
}


type MessagePropsType = {
    dialog: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.dialog}>{props.dialog}</div>
    );
}


function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name='Hanna' id={1}/>
                <DialogItem name='Kira' id={2}/>
                <DialogItem name='Tim' id={3}/>
                <DialogItem name='Sasha' id={4}/>
                <DialogItem name='Anna' id={5}/>
                <DialogItem name='Ali' id={6}/>
            </div>

            <div className={s.messages}>
                <Message dialog='Hi'/>
                <Message dialog='Hoe are you?!'/>
                <Message dialog='Hi, my dear!'/>
                <Message dialog='Where are you?'/>
            </div>

        </div>
    );
}

export default Dialogs;