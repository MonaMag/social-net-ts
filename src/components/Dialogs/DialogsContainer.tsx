import React  from 'react';
import {initialStateType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


type MapStatePropsType = {
    dialogsPage: initialStateType
    isAuth: boolean
}

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody));
        },
    }
}

//функция compose (из функцион-го пограм-я, из Redux) -Объединяет функции справа налево. Мы можем использовать ее, чтобы применить несколько расширителей стора последовательно.Т.е. делает композицию обработчиков чего-либо, возвращает конечную функцию, полученную путем композиции переданных функций справа налово


export default compose<React.ComponentType>(
    //withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
)(Dialogs)

