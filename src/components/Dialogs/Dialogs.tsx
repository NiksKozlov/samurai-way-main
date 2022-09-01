import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props: any) => {

    let dialogs = [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Alina"},
        {id: 3, name: "Mark"},
        {id: 4, name: "Pavel"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Sergei"}
    ]

    let messages = [
        {id: 1, userMessage: "Hi"},
        {id: 2, userMessage: "How are you?"},
        {id: 3, userMessage: "Yo"},
        {id: 4, userMessage: "What's up!"},
        {id: 5, userMessage: "Yo"}
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messages.map(m => <Message message={m.userMessage} />)


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