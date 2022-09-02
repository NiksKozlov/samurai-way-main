import React from "react";
import s from "./ProfileInfo.module.css"

type ProfileInfoPropsType = {}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <div>
                <img src="https://html5css.ru/css/img_forest.jpg" alt="img" />
            </div>
            <div className={s.descriptionBlock}>
                description + ava
            </div>
        </div>
    );
};

export default ProfileInfo;