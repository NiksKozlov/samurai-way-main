import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={` ${s.dialog} ${s.active}`}>
                    <NavLink to={"/dialogs/1"}>Nikita</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/2"}>Alina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/3"}>Mark</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/4"}>Pavel</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/5"}>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/6"}>Sergei</NavLink>
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