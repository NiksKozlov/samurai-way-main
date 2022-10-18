import {combineReducers, createStore} from 'redux';
import {addPostAC, changeNewPostTextAC, profileReducer} from './profile-reducer';
import {changeNewMessageTextAC, dialogsReducer, sendMessageAC} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {followAC, setUsersAC, unfollowAC, usersReducer} from './users-reducer';


export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof changeNewMessageTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
