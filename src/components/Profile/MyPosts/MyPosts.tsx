import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message='Hi! How are you?' likes={15}/>
                <Post message="It's my first post!!!" likes={20}/>
            </div>
        </div>
    );
};

export default MyPosts;