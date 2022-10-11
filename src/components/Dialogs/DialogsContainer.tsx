import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionTypes, DialogsPageType} from '../../redux/store';
import {changeNewMessageTextAC, sendMessageAC} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


export type DialogsContainerPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void
}


const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    const sendMessage = () => {
        props.dispatch(sendMessageAC())
    }
    const changeNewMessageText = (newText: string) => {
        props.dispatch(changeNewMessageTextAC(newText))
    }

    return (
        <Dialogs dialogsPage={props.state} changeNewMessageText={changeNewMessageText} sendMessage={sendMessage}/>
    )
}

export default DialogsContainer;