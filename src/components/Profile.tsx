import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src='https://html5css.ru/css/img_forest.jpg' alt='img'/>
            </div>
            <div>
                description + ava
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={styles.posts}>
                    <div className={styles.item}>
                        post1
                    </div>
                    <div className={styles.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;