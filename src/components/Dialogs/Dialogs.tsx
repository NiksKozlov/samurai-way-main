import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={` ${s.dialog} ${s.active}`}>
                    Nikita
                </div>
                <div className={s.dialog}>
                    Alina
                </div>
                <div className={s.dialog}>
                    Mark
                </div>
                <div className={s.dialog}>
                    Pavel
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    Yo
                </div>
            </div>
        </div>
    )
}

export default Dialogs;