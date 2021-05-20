import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';
import {DialogItemPropsType} from "../../../redux/store";



function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    );
}

export default DialogItem;

