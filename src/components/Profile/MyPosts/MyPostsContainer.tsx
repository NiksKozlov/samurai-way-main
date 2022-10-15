import React from 'react';
import {addPostAC, changeNewPostTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


type MyPostsContainerPropsType = {}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const changeNewPostText = (newText: string) => {
                    store.dispatch(changeNewPostTextAC(newText))
                }

                return <MyPosts posts={store.getState().profilePage.posts}
                         newPostText={store.getState().profilePage.newPostText}
                         changeNewPostText={changeNewPostText}
                         addPost={addPost} />
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;