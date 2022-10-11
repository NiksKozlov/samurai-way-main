import {ActionTypes, PostType, ProfilePageType} from './store';


const initialState = {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post!!!', likesCount: 20},
        ],
        newPostText: ''
    }

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
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

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changeNewPostTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newText: newText
    } as const
}


export default profileReducer