import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionTypes, PostType} from '../../../redux/state';


type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionTypes) => void
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'ADD-POST'})
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'CHANGE-NEW-POST-TEXT', newText: newPostElement.current.value})
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;