import React from "react";
import s from "./Dialogs.module.css";
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message, {MessagesType} from "./Message/Message";


export type DialogsPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessagesType>
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.messages.map(m => <Message message={m.userMessage} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;