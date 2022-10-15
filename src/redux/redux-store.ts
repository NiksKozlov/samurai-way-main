import {combineReducers, createStore} from 'redux';
import {addPostAC, changeNewPostTextAC, profileReducer} from './profile-reducer';
import {changeNewMessageTextAC, dialogsReducer, sendMessageAC} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';


export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>




const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
