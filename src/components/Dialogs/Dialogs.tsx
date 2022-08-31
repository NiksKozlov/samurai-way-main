import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = { message: string }

const DialogItem: React.FC<DialogItemType> = (props) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props: any) => {

    let dialogsData = [
        {id: 1, name: "Nikita"},
        {id: 2, name: "Alina"},
        {id: 3, name: "Mark"},
        {id: 4, name: "Pavel"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Sergei"}
    ]

    let messagesData = [
        {id: 1, userMessage: "Hi"},
        {id: 2, userMessage: "How are you?"},
        {id: 3, userMessage: "Yo"},
        {id: 4, userMessage: "What's up!"},
        {id: 5, userMessage: "Yo"}
    ]
    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = messagesData.map(m => <Message message={m.userMessage} />)


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