import React  from 'react';
import {initialStateType, sendMessageAC, updateMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


type MapStatePropsType = {
    dialogsPage: initialStateType
}

type MapDispatchPropsType = {
    sendMessage: () => void
    newMessageChange: (text:string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC());
        },
        newMessageChange: (text:string) => {
            dispatch(updateMessageBodyAC(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)


export default DialogsContainer;

