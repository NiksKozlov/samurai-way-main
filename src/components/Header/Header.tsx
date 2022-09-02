import React from "react";
import s from "./Header.module.css";

type HeaderPropsType = {}

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://profedu.by/wp-content/uploads/2021/10/cropped-ripo-favicon.png"
                 alt="img"/>
        </header>
    );
};

export default Header;