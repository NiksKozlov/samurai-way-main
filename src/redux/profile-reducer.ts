import {ActionTypes, PostType, ProfilePageType} from './state';

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
    }

    return state
}