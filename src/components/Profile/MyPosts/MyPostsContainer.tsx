import React from 'react';
import {addPostAC, changeNewPostTextAC, PostType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';



export type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}
export type MapDispatchPropsType = {
    changeNewPostText: (newText: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        changeNewPostText: (newText: string) => {
                     dispatch(changeNewPostTextAC(newText))
                 },
        addPost: () => {
                     dispatch(addPostAC())
                 }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)