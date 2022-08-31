import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Nikita" id="1" />
                <DialogItem name="Alina" id="2" />
                <DialogItem name="Mark" id="3" />
                <DialogItem name="Pavel" id="4" />
                <DialogItem name="Viktor" id="5" />
                <DialogItem name="Sergei" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;