import React from 'react';
import s from './../Dialogs.module.css';
import {MessagePropsType} from "../../../redux/store";


function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
        </div>
    );
}

export default Message;