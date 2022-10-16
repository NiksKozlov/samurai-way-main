import {ActionTypes} from './redux-store';


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState = {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post!!!', likesCount: 20},
        ],
        newPostText: ''
    }

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'CHANGE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText};
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

