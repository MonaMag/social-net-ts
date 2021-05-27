import React  from 'react';
import {sendMessageAC, updateMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

/*

type DialogsContainerPropsType = {
    store: Store
}
*/

function DialogsContainer() {


    return <StoreContext.Consumer>
        { store => {
                const state = store.getState().dialogsPage
                const SendMessage = () => {
                    store.dispatch(sendMessageAC())
                }
                const NewMessageChange = (text: string) => {
                    store.dispatch(updateMessageBodyAC(text));
                }
                return <Dialogs dialogsPage={state}
                                sendMessage={SendMessage}
                                NewMessageChange={NewMessageChange}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;

