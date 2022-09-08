import React from 'react';
import styles from './Post.module.css';

type PostPropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg' alt='img' />
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    );
};

export default Post;
