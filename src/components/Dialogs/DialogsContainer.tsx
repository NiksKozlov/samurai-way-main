import React from 'react';
import {changeNewMessageTextAC, sendMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


export type DialogsContainerPropsType = {}


const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                const sendMessage = () => {
                    store.dispatch(sendMessageAC())
                }

                const changeNewMessageText = (newText: string) => {
                    store.dispatch(changeNewMessageTextAC(newText))
                }

                return <Dialogs dialogsPage={store.getState().dialogsPage}
                         changeNewMessageText={changeNewMessageText}
                         sendMessage={sendMessage} />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;