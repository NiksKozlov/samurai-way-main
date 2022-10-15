import {ActionTypes, DialogsPageType} from './store';


const initialState = {
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

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state;
        case 'SEND-MESSAGE':
            const newText = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: newText})
            return state;
        default:
            return state
    }
}

export const changeNewMessageTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newText: newText
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

export default dialogsReducer