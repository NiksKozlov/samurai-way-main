import React from 'react'
import {addPostAC, changeNewPostTextAC, profileReducer} from './profile-reducer';


test('post must be sent', () => {

    const startState = {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post!!!', likesCount: 20},
        ],
        newPostText: 'I ate a rat for breakfast today:)'
    }

    const endState = profileReducer(startState, addPostAC())

    expect(endState.newPostText).toBe('')
    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2].message).toBe('I ate a rat for breakfast today:)')
})

test('post text should be changed', () => {

    const startState = {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post!!!', likesCount: 20},
        ],
        newPostText: 'I ate a rat for breakfast today:)'
    }

    const endState = profileReducer(startState, changeNewPostTextAC('I was kidding :D'))

    expect(endState.newPostText).toBe('I was kidding :D')
})