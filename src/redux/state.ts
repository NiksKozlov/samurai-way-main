export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Sidebar
}

export type Sidebar = {}


export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    addPost: () => void
    changeNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post!!!', likesCount: 20},
            ],
            newPostText: ''
        },

        dialogsPage: {
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
        },

        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    changeNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState () {
        return this._state
    }
}

export default store;