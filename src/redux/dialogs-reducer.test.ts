import React from 'react';
import {changeNewMessageTextAC, dialogsReducer, sendMessageAC} from './dialogs-reducer';


test('text should be changed', () => {
    const startState = {
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Alina'},
            {id: 3, name: 'Mark'},
            {id: 4, name: 'Pavel'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Sergei'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'What\'s up!'},
            {id: 5, message: 'Yo'}
        ],
        newMessageText: ''
    }

    const endState = dialogsReducer(startState, changeNewMessageTextAC('a'))

    expect(endState.newMessageText).toBe('a')
    expect(startState.newMessageText).toBe('')
    expect(startState).not.toBe(endState)
})

test('message must be sent', () => {
    const startState = {
        dialogs: [
            {id: 1, name: 'Nikita'},
            {id: 2, name: 'Alina'},
            {id: 3, name: 'Mark'},
            {id: 4, name: 'Pavel'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Sergei'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'What\'s up!'},
            {id: 5, message: 'Yo'}
        ],
        newMessageText: 'Hola all'
    }

    const endState = dialogsReducer(startState, sendMessageAC())

    expect(startState).not.toBe(endState)
    expect(startState.messages).not.toBe(endState.messages)
    expect(endState.newMessageText).toBe('')
    expect(startState.messages.length).toBe(5)
    expect(endState.messages.length).toBe(6)
    expect(endState.messages[5].message).toBe('Hola all')
})