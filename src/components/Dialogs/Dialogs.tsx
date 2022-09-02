import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import state from "../../redux/state";


export type DialogsPropsType = {}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let dialogs = state.dialogs
    let messages = state.messages

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messages.map(m => <Message message={m.message} />)


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