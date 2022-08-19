import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src='https://html5css.ru/css/img_forest.jpg' alt='img' />
            </div>
            <div>
                description + ava
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;