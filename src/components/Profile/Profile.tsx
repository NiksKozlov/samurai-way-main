import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionTypes, ProfilePageType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;