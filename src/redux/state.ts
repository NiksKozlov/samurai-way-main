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
    likesCount: string
}

type ProfilePageType = {
    posts: Array<PostType>
}

type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Sidebar
}

type Sidebar = {}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi! How are you?", likesCount: "15"},
            {id: 2, message: "It's my first post!!!", likesCount: "20"},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Nikita"},
            {id: 2, name: "Alina"},
            {id: 3, name: "Mark"},
            {id: 4, name: "Pavel"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Sergei"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "What's up!"},
            {id: 5, message: "Yo"}
        ],
    },

    sidebar: {}
}

export default state;