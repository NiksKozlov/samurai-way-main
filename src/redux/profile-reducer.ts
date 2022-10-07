import {ActionTypes, PostType, ProfilePageType} from './state';

const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}

export default profileReducer