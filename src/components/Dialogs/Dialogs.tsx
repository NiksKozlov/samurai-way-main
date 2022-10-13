import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPageType} from '../../redux/store';


export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    changeNewMessageText: (newText: string) => void
    sendMessage: () => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)
    const newMessageText = props.dialogsPage.newMessageText

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value
        props.changeNewMessageText(newText)
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