import React from 'react';
import s from './../Dialogs.module.css';

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        const message = newMessageElement.current?.value
        alert(message)
    }

    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={sendMessage}>send</button>
        </div>
    )
}

export default Message;