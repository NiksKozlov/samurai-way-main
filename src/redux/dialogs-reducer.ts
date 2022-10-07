import {ActionTypes, DialogsPageType} from './state';

const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {

    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state;
        case 'SEND-MESSAGE':
            let newText = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: newText})
            return state;
        default:
            return state
    }
}

export default dialogsReducer