import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionTypes, DialogsPageType} from '../../redux/store';
import {changeNewMessageBodyAC, sendMessageAC} from '../../redux/dialogs-reducer';


export type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    const messagesElements = props.state.messages.map(m => <Message message={m.message} />)
    const newMessageText = props.state.newMessageText

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value
        props.dispatch(changeNewMessageBodyAC(newText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea value={newMessageText}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;