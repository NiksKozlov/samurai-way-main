import {ActionTypes, DialogsPageType} from './state';

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {

    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            break;
        case 'SEND-MESSAGE':
            let newText = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: newText})
            break;
    }

    return state
}