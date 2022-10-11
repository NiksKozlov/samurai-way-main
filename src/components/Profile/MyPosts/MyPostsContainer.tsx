import React from 'react';
import {ActionTypes, PostType} from '../../../redux/store';
import {addPostAC, changeNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


type MyPostsContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    const addPost = () => {
            props.dispatch(addPostAC())
    }

    const changeNewPostText = (newText: string) => {
            props.dispatch(changeNewPostTextAC(newText))
    }

    return (
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 changeNewPostText={changeNewPostText}
                 addPost={addPost}/>
    );
};

export default MyPostsContainer;