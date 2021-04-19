import React from 'react';
import s from './../Dialogs.module.css';
import {MessagePropsType} from "../../../redux/state";



function Message(props: MessagePropsType) {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

export default Message;